var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));

module.exports = router;
