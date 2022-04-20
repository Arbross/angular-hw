import { Component } from '@angular/core';
import { IUserCredentialsDTO } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private accountService: AccountService) { }

  submit(data: IUserCredentialsDTO): void {
    //this.accountService.register(data);

    alert("Registered!");
  }

}
