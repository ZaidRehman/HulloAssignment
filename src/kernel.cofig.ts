import { TypeBinding, Kernel, TypeBindingScopeEnum } from "./../inversify/inversify";

//Repos
import { ThreadRepoImpl } from "./repositories/thread-repo";

var kernel = new Kernel();

kernel.bind(new TypeBinding<ThreadRepoImpl>("ThreadRepoImpl",ThreadRepoImpl, TypeBindingScopeEnum.Singleton));

export { kernel } 