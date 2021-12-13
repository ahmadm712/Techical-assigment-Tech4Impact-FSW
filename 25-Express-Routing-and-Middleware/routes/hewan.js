const express = require("express");
const router = express.Router();

const HewanController = require("../controller/hewan.controller");

const postChecker = (req, res, next) => {
  const validSpesies = ["kucing", "anjing", "kelinci"];
  const spesies = req.body.spesies



  (validSpesies.includes(spesies)) ? next() : res.status(400).json({ error: "Spesies not valid" });

//   if (validSpesies.includes(spesies)) {
//     next();
//   } else {
//     res.status(400).json({ error: "Spesies not valid" });
//   }
};

router.get("/", HewanController.getAllHewan);
router.get("/:id", HewanController.getHewanByID);
router.post("/", postChecker, HewanController.createNewHewan);
router.put("/:id", HewanController.updateHewan);
router.delete("/:id", HewanController.deleteHewan);

module.exports = router;
