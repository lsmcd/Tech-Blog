const router = require("express").Router();

const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
    res.render("homepage");
});
router.get("/login", (req, res) => { 
    res.render("login");
});
router.get("/signUp", (req, res) => { 
    res.render("signUp");
});
router.get("/signIn", (req, res) => { 
    res.render("signIn");
});
router.get("/dashboard", withAuth, (req, res) => {
    res.render("dashboard");
});

module.exports = router;