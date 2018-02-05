import { Component } from "@angular/core";
import { UserModel } from "./user.model";
import { UsersService } from "./users.service";

@Component({
    selector: "users",
    templateUrl: "./users.component.html"
})
export class UsersComponent {
    newUser: UserModel;
    onUserAdded(newUser: UserModel) {
        this.newUser = newUser;
        this.usersService.addUser(newUser);
    }

    constructor(public usersService: UsersService) {
    }
}
