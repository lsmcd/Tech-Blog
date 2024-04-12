const router = require("express").Router();
const { Comments } = require('../../models');
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    try {
        Comments.create({
            content: req.body.content,
            blogpost_id: req.body.blogpost_id,
            user_id: req.session.user_id
        }).then((data) => {
            res.json({message: "Successful comment creation"});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;