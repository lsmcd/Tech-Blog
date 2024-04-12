const router = require("express").Router();
const { BlogPosts } = require('../../models');
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    if (21 > (req.body.title).length && (req.body.title).length > 4 && 
        200 > (req.body.content).length && (req.body.content).length > 4 &&
        200 > req.session.user_id && req.session.user_id > 0){
    
        try {
            BlogPosts.create({
                title: req.body.title,
                content: req.body.content,
                user_id: req.session.user_id
            }).then((data) => {
                res.status(200).render("dashboard");
            });
        } catch (err) {
            res.status(400).json(err);
        }
    }
});
router.put("/", withAuth, (req, res) => {
    try {
        BlogPosts.findOne({
            where: {
                id: req.body.blogpost_id
            },
        }).then((data) => {
            if (req.session.user_id === data.user_id){
                if (21 > (req.body.title).length && (req.body.title).length > 4 && 
                    200 > (req.body.content).length && (req.body.content).length > 4){
        
                    data.set({
                        title: req.body.title,
                        content: req.body.content
                    });
                    data.save().then(() => {
                        res.status(200).json({message: "Successfully updated the blogpost"});
                    });
                }
            } else {
                res.status(400).json({message:"not cool"});
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
router.delete("/", withAuth, (req, res) => {
    try {
        BlogPosts.findOne({
            where: {
                id: req.body.blogpost_id
            },
        }).then((data) => {
            if (req.session.user_id === data.user_id){
                data.destroy().then(() => {
                    res.status(200).json({message: "Successfully deleted blogpost"});
                });
            } else {
                res.status(400).json({message:"not cool"});
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
module.exports = router;