const router = require("express").Router();
const { BlogPosts } = require('../../models');
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    try {
        BlogPosts.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        }).then((data) => {
            res.status(200).render("/dashboard");
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
// router.update("/", withAuth, (req, res) => {
//     try {
//         BlogPosts.getOne({
//             where: {
//                 id: req.body.blogpost_id
//             },
//         }).then(async (data) => {
//             if (req.session.user_id === data.user_id){
//                 data.set({
//                     title: req.body.title,
//                     content: req.body.content
//                 });
//                 await data.save();

//                 res.status(200).render("/dashboard");
//             } else {
//                 res.status(400).json({message:"not cool"});
//             }
//         });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });
router.delete("/", withAuth, (req, res) => {
    try {
        BlogPosts.getOne({
            where: {
                id: req.body.blogpost_id
            },
        }).then(async (data) => {
            if (req.session.user_id === data.user_id){
                await data.destroy();

                res.status(200).render("/dashboard");
            } else {
                res.status(400).json({message:"not cool"});
            }
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;