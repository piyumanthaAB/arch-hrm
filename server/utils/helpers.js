import jwt from 'jsonwebtoken';

// @ DESCRIPTION        =>  sign the JWT  token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// @ DESCRIPTION            =>  embed the signed JWT token in a cookie and send it to the browser or API client(POSTMAN)
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user.id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // cookies can read by only server
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true; // cookies are sent only via https

  res.cookie('jwt', token, cookieOptions);

  // remove password field from output
  user.password = undefined;

  res.status(statusCode).json({
    token,
    status: 'success',
    data: {
      user,
    },
  });
};

export { createSendToken };
