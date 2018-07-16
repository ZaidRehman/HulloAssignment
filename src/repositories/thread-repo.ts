import { Message } from "../entities/Messages"
import { Thread } from "../entities/Thread";


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
        var arr = [{
            id: "0",
            title: "Kevin",
            messages: [{
                user: "Kevin",
                text: "Hey Rob, did you get your slides ready for Polymer Summit?"
            }, {
                user: "Rob",
                text: "Who me? You know I'm always prepared early for these things."
            }, {
                user: "Kevin",
                text: "Figures, you're a pro.  Me? Finished last night in the hotel. LOL"
            }]
        }, {
            id: "1",
            title: "Scott",
            messages: [{
                user: "Rob",
                text: "Do you know if there's there an emoji for hot sauce?"
            }, {
                user: "Scott",
                text: "Hmmm, dunno.  Ask the emojineer on the team, she'll know."
            }]
        }, {
            id: "2",
            title: "Steve",
            messages: [{
                user: "Steve",
                text: "I can't believe how easy it is to add a backend to Polymer using Firebase.  You did a killer job on that element."
            }, {
                user: "Rob",
                text: "Thanks, man.  I agree, it's an awesome combination."
            }]
        }]

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