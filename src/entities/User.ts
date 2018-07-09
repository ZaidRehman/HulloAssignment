import { Inject } from "./../../inversify/inversify";
import { UserRepo } from './../repositories/UserRepo';
import { Contacts } from './../entities/Contacts';
import { Messages } from './../entities/Messages';

@Inject("MessagesRepo", "ContactsRepo")
export class Person implements UserRepo {

    name: String
    contacts: Contacts
    messages: Messages

    public constructor(
        messages: Messages,
        contacts: Contacts
    ) {
        this.contacts = contacts;
        this.messages = messages;
    }
    public log() {
        console.log("foobar");
    }

    getContacts() {
        return this.contacts
    }
    getMessages() {
        return this.messages
    }

}