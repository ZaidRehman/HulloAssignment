import {Contact} from "../entities/contacts"

export interface IContactRepo {
    save(contact: Contact): Contact;
    getAll(): Contact[];
}

export class ContactRepoImpl implements IContactRepo {
    save(contact: Contact): Contact {
        localStorage.setItem(contact.id, JSON.stringify(contact))
        return contact;
    }

    getAll(): Contact[] {
        let ret: Contact[] = [];
        let arr = [{
            id: "0",
            name: "test"
        },{
            id: "1",
            name: "test1"
        },{
            id: "2",
            name: "test2"
        }];

        arr.forEach(contact => {
            ret.push(new Contact(contact.id, contact.name));
        });

        return ret;
    }
}