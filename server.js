const routes = require("./controllers");

const express = require("./express");

const app = express();

const PORT = process.env.PORT || 3001;


app.use(routes);

app.listen(PORT, () => console.log("Now listening on port " + PORT))