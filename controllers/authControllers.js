const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

module.exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please fill out all the fields" });
  }
  User.find({ email }).then((email) => {
    if (email) {
      res
        .status(400)
        .json({ msg: "This email already exists. Please use another email." });
    }
    const newUser = new User({ name, email, password });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt
            .sign({ id: user._id }, config.get("jwtsecret"), {
              expiresIn: 3600,
            })
            .then((err, token) => {
              if (err) throw error;
              res.jsn({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.emai,
                },
              });
            });
        });
      });
    });
  });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please fill out all the fields" });
  }
  User.findOne({ email }).then((email) => {
    if (!email) {
      res.json({ msg: "This email doesnt exists. Please sign up." });
    }
  });
  bcrypt.compare(password, user.password).then((isMatch) => {
    if (!isMatch) {
      res.status(400).json({ msg: "Invalid credentials" });
    }
    jwt
      .sign({ id: user._id }, config.get("jwtsecret"), {
        expiresIn: 3600,
      })
      .then((err, token) => {
        if (err) throw error;
        res.jsn({
          token,
          user: {
            id: user._id,
            name: user.name,
          },
        });
      });
  });
};

module.exports.get_user = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};
