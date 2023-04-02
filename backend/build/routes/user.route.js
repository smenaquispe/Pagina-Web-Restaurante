"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/user', (req, res) => {
    res.send('usermmmdd como estan todos');
});
exports.default = router;
