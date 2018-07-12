
import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
var person = kernel.resolve<User>("User");


var ContactThread = Polymer(<any>
    {
        is: 'contact-thread',
        conditionalClass: function (name: String) {
            return name === "Peter" ? 'selected' : ''
        },
        properties:
        {
            prop: {
                type: String,
                value: 'Contact Thread'
            },
            data: {
                type: Array,
                value: person.contact.getAll()
            }
        },

    });

