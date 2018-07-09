"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kernel_cofig_1 = require("../kernel.cofig");
var person = kernel_cofig_1.kernel.resolve("UserRepo");
var ThreadView = Polymer({
    is: 'thread-view',
    conditionalClass: function (name) {
        return name === "Peter" ? 'selected' : '';
    },
    properties: {
        prop: {
            type: String,
            value: 'Thread View'
        },
        data: {
            type: Array,
            value: person.contacts.contacts
        }
    },
});
