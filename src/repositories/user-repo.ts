import {User} from '../entities/User'

export interface IUserRepo {
    save(user: User): User;
    getAll(): User[]
}

export class UserRepoImpl implements IUserRepo {

    save(user: User): User {

        return user
    }

    getAll(): User[] {
        var ret: User[] = []
        let arr = [
            {
                id: "0",
                name: "test"
            }
        ]
        arr.forEach( user => {
            //ret.push(new User(user.id,user.name))
        })
        return ret
    }
}
