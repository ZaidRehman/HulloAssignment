import { MessagesRepo } from './MessagesRepo'
import { ContactsRepo } from './ContactsRepo'

export interface UserRepo {
    name: String
    contacts: ContactsRepo
    messages: MessagesRepo
    getContacts(): ContactsRepo
    getMessages(): MessagesRepo
}
