var express = require("express");
var router = express.Router();
const usersController = require("../controllers/users_controller");

router.get("/profile", usersController.profile);
router.get("/post", usersController.post);

module.exports = router;
