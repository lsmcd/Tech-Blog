const path = require("path");
const routes = require("./controllers");

const express = require("express");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ 
    helpers: {
        formatTime(date) { return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
    }
});


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "123456789",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    proxy: true,
    saveUninitialized: true
}));

app.use(express.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening on port " + PORT));
});