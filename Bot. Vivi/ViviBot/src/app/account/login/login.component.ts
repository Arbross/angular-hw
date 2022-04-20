import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserCredentialsDTO } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private accountService: AccountService) { }

  submit(data: IUserCredentialsDTO) {
    this.login(data);

    alert("Logined!");
  }

  login(credentials: IUserCredentialsDTO) {
    // this.accountService.login(credentials).subscribe(response => {
    //   console.log(response);
    //   this.accountService.saveToken(response.token);
    // }, error => console.error(error));
  }
}
