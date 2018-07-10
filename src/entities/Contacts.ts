export class Contact {
    public name: string;
    public id: string;
    public phone: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return this.name + " -- " + this.phone;
    }
}