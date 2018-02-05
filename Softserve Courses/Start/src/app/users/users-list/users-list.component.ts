import { UserModel } from "./../user.model";
import { UsersService } from "./../users.service";
import { Component, Input, OnInit } from "@angular/core";
@Component({
    selector: "users-list",
    templateUrl: "./users-list.component.html"
})
export class UsersListComponent implements OnInit {
    @Input() newUser: UserModel;
    users: UserModel[];
    constructor(public usersService: UsersService) {
        this.users = usersService.users;
    }

    ngOnInit() {
        this.users = this.usersService.users;
    }


    deleteUser(Id: number) {
        this.usersService.deleteUser(Id);
    }

    addUser() {
        this.usersService.addUser(this.newUser);
    }

}
