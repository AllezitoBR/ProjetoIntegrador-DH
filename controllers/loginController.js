const fs = require("fs");
const path = require("path");

const controller = {
  index: (req, res) => {
    res.render("./Login/login");
  },
};

module.exports = controller;
