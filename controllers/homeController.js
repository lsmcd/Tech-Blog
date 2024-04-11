const router = require("express").Router();
const { BlogPosts } = require('../models');

const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
    try {
        var loginState = req.session.logged_in ? "signOut" : "login";
        var loginLogout = req.session.logged_in ? "Sign Out" : "Login";

        console.log(loginState + " " + loginLogout)

        BlogPosts.findAll( {raw: true} ).then((blogposts) => {
            res.render("homepage", {blogposts, loginState, loginLogout});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
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
router.get("/signOut", (req, res) => { 
    res.render("signOut");
});
router.get("/dashboard", withAuth, (req, res) => {
    res.render("dashboard");
});

module.exports = router;