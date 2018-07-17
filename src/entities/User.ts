import { Inject } from '../../inversify/inversify'
import { ThreadRepoImpl } from '../repositories/thread-repo';

@Inject("MessageRepoImpl", "ContactRepoImpl", "ThreadRepoImpl")
export class User {
    threads: ThreadRepoImpl

    public constructor(
        threads: ThreadRepoImpl
    ) {
        this.threads = threads;
    }
}