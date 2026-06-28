const express = require("express");
const seed = require("./seed.json");

const app = express();
const PORT = process.env.PORT || 3000;

function pickById(items, id) {
    return items.find((item) => item.id === Number(id)) || null;
}

app.get("/route", (req, res) => {
    res.status(200).json({ status: "ok", message: "Web API" });
});

app.get("/provinces", (req, res) => {
    res.status(200).json(
        seed.provinces.map((province) => ({
            province_id: province.id,
            name: province.name,
        }))
    );
});

app.get("/provinces/:id", (req, res) => {
    const province = pickById(seed.provinces, req.params.id);

    if (!province) {
        return res.status(404).json({ message: "Province not found" });
    }

    return res.status(200).json({
        province_id: province.id,
        name: province.name,
    });
});

app.get("/districts", (req, res) => {
    res.status(200).json(
        seed.districts.map((district) => ({
            district_id: district.id,
            name: district.name,
            province_id: district.province_id,
        }))
    );
});

app.get("/districts/:id", (req, res) => {
    const district = pickById(seed.districts, req.params.id);

    if (!district) {
        return res.status(404).json({ message: "District not found" });
    }

    return res.status(200).json({
        district_id: district.id,
        name: district.name,
        province_id: district.province_id,
    });
});

app.get("/stations", (req, res) => {
    res.status(200).json(
        seed.stations.map((station) => ({
            station_id: station.id,
            name: station.name,
            district_id: station.district_id,
        }))
    );
});

app.get("/stations/:id", (req, res) => {
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

app.get(["/vehicle", "/vehicles"], (req, res) => {
    res.status(200).json(
        seed.vehicles.map((vehicle) => ({
            vehicle_id: vehicle.id,
            reg_number: vehicle.registration_number,
            device_id: vehicle.device_id,
            station_id: vehicle.station_id,
        }))
    );
});

app.get(["/vehicle/:id", "/vehicles/:id"], (req, res) => {
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

app.get(["/vehicle/:id/pings", "/vehicles/:id/pings"], (req, res) => {
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



if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;