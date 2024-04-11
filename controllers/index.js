const router = require("express").Router();

const homeController = require("./homeController.js");
const blogpostController = require("./homeController.js");
const apiController = require("./api");

router.use("/", homeController);

router.use("/api", apiController);

router.use("/blogposts", apiController);

module.exports = router;
