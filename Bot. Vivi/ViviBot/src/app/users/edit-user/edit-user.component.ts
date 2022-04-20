import { Component } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  constructor(private userService: UsersService) { }

  submit(user: User): void {
    this.userService.update(user);
    alert("Edited!");
  }
}
