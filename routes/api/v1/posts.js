var express = require("express");
var router = express.Router();
const postsApi = require("../../../controllers/api/v1/posts_api");

router.get("/", postsApi.index);

module.exports = router;
