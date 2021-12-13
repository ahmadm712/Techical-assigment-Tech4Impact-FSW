const express = require("express");

const Routehewan = require("./hewan");

const router = express.Router();

router.use("/hewan", Routehewan);

module.exports = router;
