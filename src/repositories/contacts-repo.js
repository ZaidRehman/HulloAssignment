"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("../entities/contacts");
var ContactRepoImpl = (function () {
    function ContactRepoImpl() {
    }
    ContactRepoImpl.prototype.save = function (contact) {
        localStorage.setItem(contact.id, JSON.stringify(contact));
        return contact;
    };
    ContactRepoImpl.prototype.getAll = function () {
        var ret = [];
        var arr = [{
                id: "0",
                name: "test"
            }, {
                id: "1",
                name: "test1"
            }, {
                id: "2",
                name: "test2"
            }];
        arr.forEach(function (contact) {
            ret.push(new contacts_1.Contact(contact.id, contact.name));
        });
        return ret;
    };
    return ContactRepoImpl;
}());
exports.ContactRepoImpl = ContactRepoImpl;
