import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
import { Thread } from "../entities/Thread";
var person = kernel.resolve<User>("User");

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
        threads: {
            type: Array,
            notify: true,
            observer: '_threadsChanged'
        },
        selectedThread: {
            notify: true
        },
        _selectedIndex: {
            observer: '_selectedIndexChanged'
        },
    },
    _threadsChanged: function (n) {
        this._selectedIndex = 0;
    },
    _selectedIndexChanged: function (idx) {
        if (this.threads) {
            this.$.selector.select(this.threads[idx]);
        }
    },
    _addNewUser: function (e) {
        var value: string = this.$.newUserInput.value
        if (value) {
            var result = person.threads.addNewThread(value, this.threads)
            if (result instanceof Thread) {
                this.push('threads', result);
                this._selectedIndex = result["id"]
            } else if (typeof (result) === 'string') {
                this._selectedIndex = result
            } else {
                console.log("Something went wrong with 'result' datatype", typeof result)
            }
            this.$.newUserInput.value = ''
        } else {
            alert("Enter valid name")
        }
    }
});

