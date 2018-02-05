import { UserModel } from "./user.model";
export class UsersService {
    users: UserModel[] = [
        {Id: 0, FirstName: "Andriy", LastName: "Bendziak", Email: "abend@softserveinc.com", Age: 1},
        {Id: 1, FirstName: "Vasya", LastName: "Pupkin", Email: "vpupkin@softserveinc.com", Age: 2}
    ];

    addUser(user: UserModel) {
        this.users.push(user);
    }

    deleteUser(Id: number) {
        this.users.splice(Id, 1);
    }
}
