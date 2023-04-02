"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./routes/user.route"));
// lib/app.ts
const express = require("express");
// Create a new express application instance
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use(user_route_1.default);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
