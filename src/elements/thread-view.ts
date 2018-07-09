
import { kernel } from "../kernel.cofig";
import { UserRepo } from "../repositories/UserRepo";
var person = kernel.resolve<UserRepo>("UserRepo");

var ThreadView = Polymer(<any>
    {
        is: 'thread-view',
        conditionalClass: function (name: String) {
            return name === "Peter" ? 'selected' : ''
        },
        properties:
        {
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

