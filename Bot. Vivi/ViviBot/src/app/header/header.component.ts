import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(accountService: AccountService) { }

  ngOnInit(): void {
  }

  logout(): void {
    //accountService.logout();
  }
}
