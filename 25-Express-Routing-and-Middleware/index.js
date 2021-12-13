const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3004;

app.use(express.json());

const logger = (req, res, next) => {
  console.log("It's Logger");
  next();
};

app.use(logger);

app.use(router);

app.listen(port, () => console.log("server is listening on port", port));
