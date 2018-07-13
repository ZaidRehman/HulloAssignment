import { TypeBinding, Kernel } from "./../inversify/inversify";

//Repos
import { MessageRepoImpl } from './repositories/messages-repo'
import { ContactRepoImpl } from './repositories/contacts-repo'
import { ThreadRepoImpl } from "./repositories/thread-repo";

//entities
import { User } from './entities/user'

var kernel = new Kernel();

kernel.bind(new TypeBinding<MessageRepoImpl>("MessageRepoImpl", MessageRepoImpl));
kernel.bind(new TypeBinding<ContactRepoImpl>("ContactRepoImpl", ContactRepoImpl));
kernel.bind(new TypeBinding<ThreadRepoImpl>("ThreadRepoImpl",ThreadRepoImpl))
kernel.bind(new TypeBinding<User>("User", User));

export { kernel } 