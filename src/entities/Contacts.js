"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact = (function () {
    function Contact(id, name) {
        this.id = id;
        this.name = name;
    }
    Contact.prototype.toString = function () {
        return this.name + " -- " + this.phone;
    };
    return Contact;
}());
exports.Contact = Contact;
