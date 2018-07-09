import { ContactsRepo } from "./../repositories/ContactsRepo";

export class Contacts implements ContactsRepo {

    contacts = [
        { name: "Mike" },
        { name: "Molly" },
        { name: "Peter" },
        { name: "Mesut" },
        { name: "Ozil" }
    ]
    public log() {
        console.log("bar");
    }
}