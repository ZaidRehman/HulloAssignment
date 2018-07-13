import { Inject } from '../../inversify/inversify'
import { MessageRepoImpl } from '../repositories/messages-repo'
import { ContactRepoImpl } from '../repositories/contacts-repo'
import { ThreadRepoImpl } from '../repositories/thread-repo';



@Inject("MessageRepoImpl", "ContactRepoImpl", "ThreadRepoImpl")
export class User {

    name: String
    contact: ContactRepoImpl
    message: MessageRepoImpl
    threads: ThreadRepoImpl

    public constructor(
        message: MessageRepoImpl,
        contact: ContactRepoImpl,
        threads: ThreadRepoImpl
    ) {
        this.contact = contact;
        this.message = message;
        this.threads = threads;
    }
}