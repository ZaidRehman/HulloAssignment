"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacts = (function () {
    function Contacts() {
        this.contacts = [
            { name: "Mike" },
            { name: "Molly" },
            { name: "Peter" },
            { name: "Mesut" },
            { name: "Ozil" }
        ];
    }
    Contacts.prototype.log = function () {
        console.log("bar");
    };
    return Contacts;
}());
exports.Contacts = Contacts;
