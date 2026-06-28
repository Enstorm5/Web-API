const express = require("express");
const seed = require("../data/seed");
const pickById = require("../utils/pickById");

const router = express.Router();

router.get("/provinces", (req, res) => {
    res.status(200).json(
        seed.provinces.map((province) => ({
            province_id: province.id,
            name: province.name,
        }))
    );
});

router.get("/provinces/:id", (req, res) => {
    const province = pickById(seed.provinces, req.params.id);

    if (!province) {
        return res.status(404).json({ message: "Province not found" });
    }

    return res.status(200).json({
        province_id: province.id,
        name: province.name,
    });
});

module.exports = router;