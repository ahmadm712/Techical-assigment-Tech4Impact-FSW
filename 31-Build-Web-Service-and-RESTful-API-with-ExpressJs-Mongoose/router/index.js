const express = require("express");

const coursesRoute = require("./courses_route");
const instructorsRoute = require("./instructors_route");
const participantsRoute = require("./participants_route");
// const  = require("./participants_route");
// const course
// const participant

const router = express.Router();

router.get("/", (req, res) => {
  const ready = {
    status: "Your DB is Ready",
  };

  res.status(200).send(ready);
});

router.use("/instructors", instructorsRoute);
router.use("/courses", coursesRoute);
// router.use("/participants", participantsRoute);

module.exports = router;
