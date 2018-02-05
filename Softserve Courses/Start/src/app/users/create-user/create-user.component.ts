import { UserModel } from "./../user.model";
import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import {ModalModule} from "ngx-modal";

@Component({
    selector: "create-user",
    templateUrl: "./create-user.component.html"
})
export class CreateUserComponent {
    newUser = new UserModel();
    @Output() userAdded: EventEmitter<UserModel> = new EventEmitter();

    addUser() {
        this.userAdded.emit(this.newUser);
    }
}
