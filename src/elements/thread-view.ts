
import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
var person = kernel.resolve<User>("User");


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
                value: person.contact.getAll()
            }
        },

    });

