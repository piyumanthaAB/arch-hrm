import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import Counter from './counterModel.js';

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      // required: [true, 'A user must have a uid'],
    },
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

userSchema.pre('save', async function (next) {
  if (!this.uid) {
    const counter = await Counter.findOneAndUpdate(
      { _id: 'User' }, // Adjust this to match the actual _id value
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );

    const formattedSeq = ('0000' + counter.seq).slice(-4);
    this.uid = `UID${formattedSeq}`;
  }
  next();
});

// hash the password whenever a user document is created on db
userSchema.pre('save', async function (next) {
  // Only run this if password is modified
  if (!this.isModified('password')) return next();

  // hash the password with 12 salt rounds
  this.password = await bcrypt.hash(this.password, 12);

  //delete the password confirm
  this.passwordConfirm = undefined;
  next();
});

// use to compare given password with hashed password on db
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// update passwordChangedAt property when user change the password
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) {
    return next();
  }
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// use to check if current user has changed the password after the JWT has issued
userSchema.methods.passwordChangedAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000);
    // console.log(changedTimeStamp, JWTTimestamp);
    return JWTTimestamp < changedTimeStamp;
  }
  // False means NOT changed !
  return false;
};

const User = mongoose.model('User', userSchema);
export default User;
