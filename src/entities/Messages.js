"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Messages = (function () {
    function Messages() {
        this.sender = {
            name: "Jhon",
            sender: true
        };
        this.receiver = {
            name: "Peter",
            sender: false
        };
        this.messages = [{
                time: "",
                text: "Hi!!!",
                sender: this.sender.name,
                receiver: this.receiver.name
            },
            {
                time: "",
                text: "Hey, How are you",
                sender: this.receiver.name,
                receiver: this.sender.name
            },
            {
                time: "",
                text: "I am fine!!",
                sender: this.sender.name,
                receiver: this.receiver.name
            }];
    }
    Messages.prototype.log = function () {
        console.log("foo");
    };
    return Messages;
}());
exports.Messages = Messages;
