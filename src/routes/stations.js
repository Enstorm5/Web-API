const express = require("express");
const seed = require("../data/seed");
const pickById = require("../utils/pickById");

const router = express.Router();

router.get("/stations", (req, res) => {
    res.status(200).json(
        seed.stations.map((station) => ({
            station_id: station.id,
            name: station.name,
            district_id: station.district_id,
        }))
    );
});

router.get("/stations/:id", (req, res) => {
    const station = pickById(seed.stations, req.params.id);

    if (!station) {
        return res.status(404).json({ message: "Station not found" });
    }

    return res.status(200).json({
        station_id: station.id,
        name: station.name,
        district_id: station.district_id,
    });
});

module.exports = router;