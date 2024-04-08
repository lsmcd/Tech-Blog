const router = require("express").Router();

const homeController = require("./homeController.js")

router.use("/", homeController)

module.exports = router;
