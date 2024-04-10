const router = require("express").Router();
const { Users } = require('../../models');

router.post("/signup", (req, res) => {
    console.log("posted")
    try {
        Users.create({
            username: req.body.username,
            password: req.body.password
        }).then((data) => {
            req.session.save(() => {
                req.session.user_id = data.id;
                req.session.logged_in = true;

                res.json({message: "Successful sign up"});
            });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post("/signin", async (req, res) => {
    try {
        Users.findOne({
            where: {
                username: req.body.username
            }
        })
        .then((data) => {
            if (data.checkPassword(req.body.password)){
                req.session.save(() => {
                    req.session.user_id = data.id;
                    req.session.logged_in = true;

                    res.status(200).json({message: "Successful sign in"});
                });
            } else {
                res.status(400).json({message: "Wrong username or password"})
            }
        }).catch((err) => {
            console.log(err)
            res.status(400).json({message: "Wrong username or password"})
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;