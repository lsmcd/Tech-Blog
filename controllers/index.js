const router = require("express").Router();

const homeController = require("./homeController.js");
const apiController = require("./api");

router.use("/", homeController);

router.use("/api", apiController);

module.exports = router;
