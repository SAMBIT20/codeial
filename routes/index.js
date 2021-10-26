var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/", homeController.home);

module.exports = router;
