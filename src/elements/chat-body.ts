import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
import { Thread } from "../entities/Thread";
var person = kernel.resolve<User>("User");

var ChatBody = Polymer(<any>{
    is: 'chat-body',
    properties: {
        threads: {
            type: Array,
            value: person.threads.getThreads(),
            notify: true
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