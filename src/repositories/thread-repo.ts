import { Message } from "../entities/Messages"
import { Thread } from "../entities/Thread";
var data = require('./data.json');

export interface IThread {
    getThreads(): Thread[];
    getTitle(): String;
    addNewThread(title: string,threads: Thread[]): Thread;
}

export class ThreadRepoImpl implements IThread {
    addNewThread(value: string,threads: Thread[]) : any
     {
        var result = threads.filter(thread => thread.title.toLowerCase().trim() === value.toLowerCase().trim())
        if(result.length === 0){
            var messages: Message[] = [];
            return new Thread(threads.length.toString(), value, messages)
        }else {
            return result[0]["id"].toString()
        }
    }

    getThreads(): Thread[] {
        var ret: Thread[] = []
        var arr = data
        arr.forEach(thread => {
            var messages: Message[] = []
            thread.messages.forEach(message => {
                messages.push(new Message(0, message.user, message.text))
            })
            ret.push(new Thread(thread.id, thread.title, messages))
        })

        return ret
    }

    getTitle():String {
        return "Rob"
    }
}