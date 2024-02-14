const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: 'Please enter a valid email',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be 8 characters or longer'],
    },
  },
  { timestamps: true },
);

UserSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.virtual('emailExist')
  .get(() => this._emailExist)
  .set((value) => (this._emailExist = value));

UserSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

UserSchema.pre('validate', function (next) {
  if (this.emailExist) {
    this.invalidate('email', 'Email already exist');
  }
  next();
});

// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
// this should go after
UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
