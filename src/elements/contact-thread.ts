import { kernel } from "../kernel.cofig";
import { Thread } from "../entities/Thread";
import { ThreadRepoImpl } from "../repositories/thread-repo";
import { Contact } from "../entities/Contacts";
var threads = kernel.resolve<ThreadRepoImpl>("ThreadRepoImpl");

var ContactThread = Polymer(<any>{
    is: 'contact-thread',
    properties: {
        prop: {
            type: String,
            value: 'Contact Thread'
        },
        user: {
            type: Object
        },
        selectedThread: {
            notify: true
        },
        selectedIndex: {
            notify: true,
            observer: 'selectedIndexChanged'
        },
        contacts: {
            type: Array,
            notify: true,
            observer: 'logContacts'
        }
    },
    _threadsChanged: function (n) {
        this.selectedIndex = 0;
    },
    selectedIndexChanged: function (idx) {
        console.log(idx)
    },
    logContacts: function(val) {
        console.log('contacts',val)
    },
    _addNewUser: function (e) {
        var value: string = this.$.newUserInput.value
        if (value) {
            var result = threads.addNewContact(value)
            if (result instanceof Contact) {
                this.push('contacts',result);
                console.log('result',result["id"])
                this.selectedIndex = result["id"]
            } else if (typeof (result) === 'string') {
                this.selectedIndex = result
            } else {
                console.log("Something went wrong with 'result' datatype", typeof result)
            }
            this.$.newUserInput.value = ''
        } else {
            alert("Enter valid name")
        }
    }
});

