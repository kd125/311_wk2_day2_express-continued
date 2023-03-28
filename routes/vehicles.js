const router = require("express").Router();
const vehicles = require("../data/vehicles");

const vehiclesController = require("../controllers/vehicles");

router.get("/vehicles", vehiclesController.list);

router.get("/vehicles/:id", vehiclesController.show);

router.post("/vehicles", vehiclesController.create);

module.exports = router;
