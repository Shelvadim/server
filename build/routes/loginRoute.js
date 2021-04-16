"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (rec, res) {
    res.send("\n      <form method=\"POST\">\n        <div>\n          <lable>Email</lable>\n          <input name=\"email\"/>\n        </div>\n        <div>\n          <lable>Password</lable>\n          <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>Submit</button>\n      </form>\n      <h1>Hi there from router</h1>\n    ");
});
router.post('/login', function (rec, res) {
    var _a = rec.body, email = _a.email, password = _a.password;
    res.send(email.toUpperCase());
});
