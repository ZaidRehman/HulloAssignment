"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kernel_cofig_1 = require("../kernel.cofig");
var person = kernel_cofig_1.kernel.resolve("User");
var ChatView;
ChatView = Polymer({
    is: 'chat-view',
    conditionalClass: function (name) {
        return name === "Jhon" ? 'sender' : '';
    },
    properties: {
        prop: {
            type: String,
            value: 'Chat View'
        },
        user: {
            type: String,
            value: "Jhon"
        },
        data: {
            type: Array,
            value: person.message.getAll()
        }
    },
});
