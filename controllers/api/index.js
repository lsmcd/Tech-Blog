const router = require("express").Router();

const userController = require("./userController");
const commentController = require("./commentController");
const blogpostController = require("./blogpostController");

router.use("/users", userController);
router.use("/comment", commentController);
router.use("/blogpost", blogpostController);

module.exports = router;