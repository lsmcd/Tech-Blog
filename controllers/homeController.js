const router = require("express").Router();
const { BlogPosts, Users, Comments } = require('../models');

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
    console.log(req.session)
    BlogPosts.findAll({
        where: {
            id: req.session.user_id
        },
        raw: true
    })
    .then((blogposts) => {
        res.render("dashboard", {blogposts});
    });
});
router.get("/dashboard/create", withAuth, (req, res) => {
    res.render("createblogpost");
});
router.get("/dashboard/:id", withAuth, (req, res) => {
    BlogPosts.findOne({
        where: {
            id: req.params.id
        },
        raw: true
    })
    .then((blogpost) => {
        if (req.session.user_id === data.user_id){
            res.render("updateblogpost", blogpost);
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json({message: "Error retrieving blog"});
    });
});
router.get("/blogposts/:id", (req, res) => {
    try {
        BlogPosts.findOne({
            where: {
                id: req.params.id
            },
            raw: true
        })
        .then((blogpost) => {
            if (blogpost){
                Users.findOne({
                    where: {
                        id: blogpost.user_id
                    },
                    raw: true
                }).then((user) => {
                    username = user.username;
                    Comments.findAll( {
                        where: {
                            blogpost_id: blogpost.id
                        },
                        raw: true
                    })
                    .then((comments) => {
                        comments.map((comment) => {
                            Users.findOne({
                                where: {
                                    id: comment.user_id
                                },
                                raw: true
                            }).then((user) => {
                                comment.username = user.username;
                            });
                        });
                        res.render("blogpost", {...blogpost, username, comments});
                    });
                }).catch((err) => {
                    console.log(err);
                    res.status(400).json({message: "Error retrieving blog owner"});
                });
            } else {
                res.status(400).json({message: "Error retrieving blog"});
            }
        }).catch((err) => {
            console.log(err);
            res.status(400).json({message: "Error retrieving blog"});
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;