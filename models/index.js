const Users = require("./Users.js");
const BlogPosts = require("./BlogPosts.js");
const Comments = require("./Comments.js");

Users.hasMany(BlogPosts, {
    foreignKey: "user_id"
});

BlogPosts.belongsTo(Users, {
    foreignKey: "user_id"
});

BlogPosts.hasMany(Comments, {
    foreignKey: "blogpost_id"
});

Comments.belongsTo(BlogPosts, {
    foreignKey: "blogpost_id"
});

Users.hasMany(Comments, {
    foreignKey: "user_id"
});

Comments.belongsTo(Users, {
    foreignKey: "user_id"
});

module.exports = {Users, BlogPosts}