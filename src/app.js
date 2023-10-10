"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const user_controller_1 = require("./controllers/user.controller");
const express_1 = __importDefault(require("express"));
//update to  userExpressServer
const route = (0, express_1.default)();
exports.app = (0, routing_controllers_1.useExpressServer)(route, {
    controllers: [user_controller_1.UserController],
});
