import { TypeBinding, Kernel } from "./../inversify/inversify";

//Repos
import { MessageRepoImpl } from './repositories/messages-repo'
import { ContactRepoImpl } from './repositories/contacts-repo'
import { UserRepoImpl } from './repositories/user-repo'

//entities
import { Message } from './entities/messages'
import { Contact } from './entities/contacts'
import { User } from './entities/user'

var kernel = new Kernel();

kernel.bind(new TypeBinding<MessageRepoImpl>("MessageRepoImpl", MessageRepoImpl));
kernel.bind(new TypeBinding<ContactRepoImpl>("ContactRepoImpl", ContactRepoImpl));
kernel.bind(new TypeBinding<User>("User", User));

export { kernel } 