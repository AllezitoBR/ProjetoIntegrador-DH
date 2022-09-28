var express = require("express");
var router = express.Router();
const descriptionController = require("../controllers/descriptionController");

router.get("/", descriptionController.index);

module.exports = router;