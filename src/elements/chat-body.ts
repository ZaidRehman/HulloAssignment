import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
var person = kernel.resolve<User>("User");

var ChatBody = Polymer(<any>{
    is: 'chat-body',
    properties: {
        threads: {
            type: Array,
            value: person.threads.getThreads()
        },
        user: {
            type: Object,
            value: person.threads.getTitle()
        },
        selectedThread: {
            type: Object
        },
    }
});