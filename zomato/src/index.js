const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes/v1");
require("./helpers/crons")
const config = require("./config/config");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json()); // for parsing application/json

/** enable cors */
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.use(express.static(path.join(__dirname, `./public`)));

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`server listening on port number ${config.port}`);
});
