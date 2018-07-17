export class Message {
    public id: string
    public sender: string
    public text: string

    constructor(id, sender, text) {
        this.id = id
        this.sender = sender
        this.text = text
    }
}
