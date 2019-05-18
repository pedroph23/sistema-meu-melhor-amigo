"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.express = express_1.default();
        this.tst1();
    }
    tst1() {
        // console.log('this', this)
        console.log(this.tst2());
    }
    tst2() {
        return 'LOL';
    }
}
exports.default = new Server().express;
