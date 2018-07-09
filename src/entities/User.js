"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("./../../inversify/inversify");
var Contacts_1 = require("./../entities/Contacts");
var Messages_1 = require("./../entities/Messages");
var Person = (function () {
    function Person(messages, contacts) {
        this.contacts = contacts;
        this.messages = messages;
    }
    Person.prototype.log = function () {
        console.log("foobar");
    };
    Person.prototype.getContacts = function () {
        return this.contacts;
    };
    Person.prototype.getMessages = function () {
        return this.messages;
    };
    Person = __decorate([
        inversify_1.Inject("MessagesRepo", "ContactsRepo"),
        __metadata("design:paramtypes", [Messages_1.Messages,
            Contacts_1.Contacts])
    ], Person);
    return Person;
}());
exports.Person = Person;