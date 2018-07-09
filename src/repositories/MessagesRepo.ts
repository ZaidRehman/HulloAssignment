export interface MessagesRepo {
    messages: Message[]
}
 
export interface Message {
    text: String,
    time?: String,
    sender: String,
    receiver: String
}