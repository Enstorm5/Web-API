const express = require("express");
const seed = require("../data/seed");
const pickById = require("../utils/pickById");

const router = express.Router();

router.get(["/vehicle", "/vehicles"], (req, res) => {
    res.status(200).json(
        seed.vehicles.map((vehicle) => ({
            vehicle_id: vehicle.id,
            reg_number: vehicle.registration_number,
            device_id: vehicle.device_id,
            station_id: vehicle.station_id,
        }))
    );
});

router.get(["/vehicle/:id", "/vehicles/:id"], (req, res) => {
    const vehicle = pickById(seed.vehicles, req.params.id);

    if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json({
        vehicle_id: vehicle.id,
        reg_number: vehicle.registration_number,
        device_id: vehicle.device_id,
        station_id: vehicle.station_id,
    });
});

router.get(["/vehicle/:id/pings", "/vehicles/:id/pings"], (req, res) => {
    const pings = seed.pings
        .filter((ping) => ping.vehicle_id === Number(req.params.id))
        .map((ping, index) => ({
            ping_id: ping.id,
            vehicle_id: ping.vehicle_id,
            timestamp: ping.timestamp,
            lat: ping.latitude,
            lng: ping.longitude,
            speed: index + 1,
        }));

    res.status(200).json(pings);
});

module.exports = router;