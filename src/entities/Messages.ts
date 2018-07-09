import { MessagesRepo } from './../repositories/MessagesRepo'

export class Messages implements MessagesRepo {
    sender: any = {
        name: "Jhon",
        sender: true
    }
    receiver: any = {
        name: "Peter",
        sender: false
    }
    messages = [{
        time: "",
        text: "Hi!!!",
        sender: this.sender.name,
        receiver: this.receiver.name
    },
    {
        time: "",
        text: "Hey, How are you",
        sender: this.receiver.name,
        receiver: this.sender.name
    },
    {
        time: "",
        text: "I am fine!!",
        sender: this.sender.name,
        receiver: this.receiver.name
    }]
    public log() {
        console.log("foo");
    }
}
