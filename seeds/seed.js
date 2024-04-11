const sequelize = require("../config/connection");
const {Users, BlogPosts, Comments} = require("../models");

const users = require("./users.json");
const blogposts = require("./blogposts.json");
const comments = require("./comments.json");

(async () => {
    await sequelize.sync({ force: true});

    await Users.bulkCreate(users, {
        individualHooks: true        
    });
    await BlogPosts.bulkCreate(blogposts);
    await Comments.bulkCreate(comments);

    process.exit(0);
})();