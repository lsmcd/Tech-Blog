const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection")

class Users extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 12]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 30]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (data) => {
                data.password = await bcrypt.hash(data.password, 10);
                return data;
            }
        },
        sequelize
    }
);

module.exports = Users;