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
var inversify_1 = require("../../inversify/inversify");
var messages_repo_1 = require("../repositories/messages-repo");
var contacts_repo_1 = require("../repositories/contacts-repo");
var User = (function () {
    function User(message, contact) {
        this.contact = contact;
        this.message = message;
    }
    User = __decorate([
        inversify_1.Inject("MessageRepoImpl", "ContactRepoImpl"),
        __metadata("design:paramtypes", [messages_repo_1.MessageRepoImpl,
            contacts_repo_1.ContactRepoImpl])
    ], User);
    return User;
}());
exports.User = User;
