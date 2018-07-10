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
            name: "Molly"
        },{
            id: "1",
            name: "Peter"
        },{
            id: "2",
            name: "Kira"
        }];

        arr.forEach(contact => {
            ret.push(new Contact(contact.id, contact.name));
        });

        return ret;
    }
}