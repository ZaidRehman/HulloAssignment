import { TypeBinding, Kernel } from "./../inversify/inversify";

//Repos
import { MessagesRepo } from './repositories/MessagesRepo'
import { ContactsRepo } from './repositories/ContactsRepo'
import { UserRepo } from './repositories/UserRepo'

//entities
import { Messages } from './entities/Messages'
import { Contacts } from './entities/Contacts'
import { Person } from './entities/User'

var kernel = new Kernel();

kernel.bind(new TypeBinding<MessagesRepo>("MessagesRepo", Messages));
kernel.bind(new TypeBinding<ContactsRepo>("ContactsRepo", Contacts));
kernel.bind(new TypeBinding<UserRepo>("UserRepo", Person));

export { kernel } 