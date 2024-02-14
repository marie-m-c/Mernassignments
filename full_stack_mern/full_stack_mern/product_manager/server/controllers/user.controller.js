const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
  try {
    userExist = await User.findOne({ email: req.body.email });
    const emailExist = userExist ? true : false;
    const user = await User.create({ ...req.body, emailExist });
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY,
    );

    res
      .cookie('usertoken', userToken, {
        httpOnly: true,
        domain: 'localhost',
        sameSite: 'None',
      })
      .json({ msg: 'success!', user: user });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res
        .status(400)
        .json({ error: 'No user corresponding to this email' });
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!correctPassword) {
      return res.status(400).json({ error: 'incorrect password' });
    }
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY,
    );
    res
      .cookie('usertoken', userToken, {
        httpOnly: true,
        domain: 'localhost',
        sameSite: 'None',
      })
      .json({ message: 'login success!' });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie('usertoken', {
    sameSite: 'None',
    path: '/',
    domain: 'localhost',
    httpOnly: true,
  });
  res.status(200).json({ message: 'logout success' });
};
