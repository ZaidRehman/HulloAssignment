"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = require("../entities/messages");
var MessageRepoImpl = (function () {
    function MessageRepoImpl() {
    }
    MessageRepoImpl.prototype.save = function (message) {
        return;
    };
    MessageRepoImpl.prototype.getAll = function () {
        var ret = [];
        var arr = [
            {
                id: "0",
                name: "test0",
                text: "test0"
            },
            {
                id: "1",
                name: "test1",
                text: "test1"
            },
            {
                id: "2",
                name: "test2",
                text: "test2"
            },
        ];
        arr.forEach(function (message) {
            ret.push(new messages_1.Message(message.id, message.name, message.text));
        });
        return ret;
    };
    return MessageRepoImpl;
}());
exports.MessageRepoImpl = MessageRepoImpl;
