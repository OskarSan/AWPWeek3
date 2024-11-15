"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let users = [];
const router = (0, express_1.Router)();
router.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
router.get('/echo/:id', (req, res) => {
    console.log(req);
    res.json({ id: req.params.id });
});
router.post('/sum', (req, res) => {
    let sum = 0;
    const { numbers } = req.body;
    console.log(numbers);
    numbers.forEach((num) => {
        sum += num;
    });
    res.json({ sum: sum });
});
router.post('/users', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.json({ message: "User successfully added" });
});
router.get('/users', (req, res) => {
    res.status(201).json({ users });
});
exports.default = router;
