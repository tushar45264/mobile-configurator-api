
const router = require('express').Router();

router.post('/',(req, res) => {
    const { components } = req.body;

    if (!components) {
        return res.status(400).json({ error: "Invalid request. Missing 'components' in the request body" });
    }

    if (!validateOrder(components)) {
        return res.status(400).json({ error: "Invalid order. Each component should appear exactly once" });
    }

    const orderId = "some-id";  
    const total = calculateTotal(components);
    const parts = components.map(part => getPartName(part));

    res.status(201).json({ order_id: orderId, total, parts });
});

const partPrices = {
    "I": 50.0, "O": 60.0, "A": 70.0,
    "W": 30.0, "U": 40.0,
    "C": 10.0, "M": 15.0, "L": 20.0,
    "D": 80.0, "F": 90.0,
    "M": 100.0, "P": 110.0
};

function validateOrder(components) {
    const partCounts = components.reduce((acc, part) => {
        acc[part] = (acc[part] || 0) + 1;
        return acc;
    }, {});

    return Object.values(partCounts).every(count => count === 1);
}

function calculateTotal(components) {
    const total = components.reduce((acc, part) => acc + partPrices[part], 0);
    return Math.round(total * 100) / 100;
}

function getPartName(partCode) {
    const partMapping = {
        "I": "LED Screen", "O": "OLED Screen", "A": "AMOLED Screen",
        "W": "Wide-Angle Camera", "U": "Ultra-Wide-Angle Camera",
        "C": "USB-C Port", "M": "Micro-USB Port", "L": "Lightning Port",
        "D": "Android OS", "F": "iOS",
        "M": "Metallic Body", "P": "Plastic Body"
    };
    return partMapping[partCode] || "Unknown Part";
}

module.exports = router;