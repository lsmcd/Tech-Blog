const Users = require("./Users.js");
const BlogPosts = require("./BlogPosts.js");

Users.hasMany(BlogPosts, {
    foreignKey: "user_id"
});

BlogPosts.belongsTo(Users, {
    foreignKey: "user_id"
});

module.exports = {Users, BlogPosts}