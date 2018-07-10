import { Inject } from '../../inversify/inversify'
import { MessageRepoImpl } from '../repositories/messages-repo'
import { ContactRepoImpl } from '../repositories/contacts-repo'



@Inject("MessageRepoImpl", "ContactRepoImpl")
export class User {

    name: String
    contact: ContactRepoImpl
    message: MessageRepoImpl

    public constructor(
        message: MessageRepoImpl,
        contact: ContactRepoImpl
    ) {
        this.contact = contact;
        this.message = message;
    }
}