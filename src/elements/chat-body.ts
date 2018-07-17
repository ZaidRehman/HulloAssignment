import { kernel } from "../kernel.cofig";
import { ThreadRepoImpl } from "../repositories/thread-repo";
var threads = kernel.resolve<ThreadRepoImpl>("ThreadRepoImpl");

var ChatBody = Polymer(<any>{
    is: 'chat-body',
    properties: {
        threads: {
            type: Array,
            value: threads.getThreads(),
            notify: true
        },
        user: {
            type: Object,
            value: threads.getTitle()
        },
        selectedThread: {
            type: Object
        },
    }
});