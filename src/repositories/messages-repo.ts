import { Message } from "../entities/messages";

export interface IMessagesRepo {
    save(message: Message): Message;
    getAll(): Message[]
}
 
export class MessageRepoImpl implements IMessagesRepo {
    
    save(message: Message): Message{

        return
    }
    getAll(): Message[] {
        let ret: Message[] = []
        let arr = [
            {
                id: "0",
                name: "test0",
                text: "test0"
            },
            {
                id: "1",
                name: "test1",
                text: "test1"
            },
            {
                id: "2",
                name: "test2",
                text: "test2"
            },
        ]

        arr.forEach(message => {
            ret.push(new Message(message.id,message.name,message.text))
        })


        return ret;
    }
}