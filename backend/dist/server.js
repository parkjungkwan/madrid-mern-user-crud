"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    // 생성자
    function Server() {
        this.app = (0, express_1.default)();
    }
    return Server;
}());
var server = new Server().app;
server.set('port', 3000); // 포트지정 바로 listen으로 지정해도 상관없음
server.listen(server.get('port'), function () {
    console.log(server.get('port') + " server is Running");
}).on('error', function (err) {
    console.log("Error message " + err);
});
