import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'A user must have a name'],
    },
    lastName: {
      type: String,
      required: [true, 'A user must have a name'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'A user must have an email'],
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    mobile: {
      type: Number,
    },
    country: {
      type: String,
      default: 'Sri-Lanka',
    },
    profilePicture: {
      type: String,
      // required: [true, 'A user must have a profile picture'],
    },
    role: {
      type: String,
      default: 'user',
      enum: {
        values: ['admin', 'user'],
        message: 'user role must be either <admin> or <user> ',
      },
    },
    password: {
      type: String,
      required: [true, 'A user must have a password !'],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'A user must confirm password !'],
      validate: {
        // This works only on CREATE & SAVE !!!!
        validator: function (val) {
          return this.password === val;
        },
        message: "Passwords doesn't match !",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    passwordChangedAt: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model('User', userSchema);
export default User;
