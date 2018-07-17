import { Message } from "./Messages";

export class Thread {
    public id: string;
    public title: string;
    public messages: Message[];

    constructor(id: string, title: string, messages: Message[]) {
        this.id = id;
        this.title = title;
        this.messages = messages;
    }
}