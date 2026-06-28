const express = require("express");
const docsRoutes = require("./docs");
const provincesRoutes = require("./provinces");
const districtsRoutes = require("./districts");
const stationsRoutes = require("./stations");
const vehiclesRoutes = require("./vehicles");

const router = express.Router();

router.get("/route", (req, res) => {
    res.status(200).json({ status: "ok", message: "Web API" });
});

router.use(docsRoutes);
router.use(provincesRoutes);
router.use(districtsRoutes);
router.use(stationsRoutes);
router.use(vehiclesRoutes);

module.exports = router;