import { Component } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private userService: UsersService) { }

  submit(user: User): void {
    this.userService.create(user);

    alert("Created!");
  }
}
