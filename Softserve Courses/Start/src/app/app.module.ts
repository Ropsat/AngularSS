import { UsersComponent } from "./users/users.component";
import { UsersService } from "./users/users.service";
import { CreateUserComponent } from "./users/create-user/create-user.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {ModalModule} from "ngx-modal";


import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users/users-list/users-list.component";


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
