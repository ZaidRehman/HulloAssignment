import { TypeBinding, Kernel } from "./../inversify/inversify";

//Repos
import { ThreadRepoImpl } from "./repositories/thread-repo";

//entities
import { User } from './entities/user'

var kernel = new Kernel();

kernel.bind(new TypeBinding<ThreadRepoImpl>("ThreadRepoImpl",ThreadRepoImpl))
kernel.bind(new TypeBinding<User>("User", User));

export { kernel } 