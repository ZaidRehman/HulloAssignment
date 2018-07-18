import { Message } from "../entities/Messages"
import { Thread } from "../entities/Thread";
import { Contact } from "../entities/Contacts";
var data = require('../../data.json');

export interface IThread {
    getThreads(): Thread[];
    getTitle(): String;
    getContacts(): Contact[];
    getThread(id: String): Thread;
}

export class ThreadRepoImpl implements IThread {

    public threads: Thread[];
    public contacts: Contact[];

    constructor() {
        this.threads = data.map(thread => {
            var messages: Message[] = [];
            messages = thread.messages.map(message => {
                return new Message(0, message.user, message.text);
            })
            return new Thread(thread.id, thread.title, messages);
        })
        this.contacts = data.map(thread => {
            return new Contact(thread.id, thread.title);
        })
    }

    addNewContact(value: string): any {
        var result = this.threads.filter(thread => thread.title.toLowerCase().trim() === value.toLowerCase().trim())
        if (result.length === 0) {
            var messages: Message[] = [];
            var id = this.threads.length.toString();
            this.threads.push(new Thread(id, value, messages));
            this.contacts.push(new Contact(id, value));
            return new Contact(id, value);
        } else {
            return result[0]["id"].toString();
        }   
    }

    getThreads(): Thread[] {
        return this.threads;
    }

    getThread(id: String): Thread {
        return this.threads.filter(thread => {
            return thread.id == id;
        })[0]
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

    getTitle(): String {
        return "Rob";
    }
}