const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class BlogPosts extends Model { }

BlogPosts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 20]
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 200]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users"
            }
        }
    },
    {
        sequelize
    }
);

module.exports = BlogPosts;