"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import { router } from './routes/loginRoute';
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
//import { router as controllerRouter } from './controllers/decorators/controller';
require("./controllers/LoginController");
require("./controllers/RootController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
//app.use(express.json());
app.use(cookie_session_1.default({ keys: ['asdfgh'] }));
//app.use(router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
//console.log('hi there');
