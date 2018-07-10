"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepoImpl = (function () {
    function UserRepoImpl() {
    }
    UserRepoImpl.prototype.save = function (user) {
        return user;
    };
    UserRepoImpl.prototype.getAll = function () {
        var ret = [];
        var arr = [
            {
                id: "0",
                name: "test"
            }
        ];
        arr.forEach(function (user) {
        });
        return ret;
    };
    return UserRepoImpl;
}());
exports.UserRepoImpl = UserRepoImpl;
