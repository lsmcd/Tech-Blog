const sequelize = require("../config/connection");
const {Users, BlogPosts} = require("../models");

const users = require("./users.json");
const blogposts = require("./blogposts.json");

(async () => {
    await sequelize.sync({ force: true});

    await Users.bulkCreate(users, {
        individualHooks: true        
    });
    await BlogPosts.bulkCreate(blogposts);

    process.exit(0);
})();