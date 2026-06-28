const express = require("express");
const seed = require("../data/seed");
const pickById = require("../utils/pickById");

const router = express.Router();

router.get("/districts", (req, res) => {
    res.status(200).json(
        seed.districts.map((district) => ({
            district_id: district.id,
            name: district.name,
            province_id: district.province_id,
        }))
    );
});

router.get("/districts/:id", (req, res) => {
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

module.exports = router;