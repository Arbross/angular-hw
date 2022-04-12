import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { purchaseList } from '../purchase-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  oldPurchases: Purchase[];
  newPurchases: Purchase[];

  ngOnInit(): void {
    setTimeout(() => {
      this.oldPurchases = purchaseList.filter((m) => m.price < 200);
      this.newPurchases = purchaseList.filter((m) => m.price >= 200);
    }, 3000);
  }
}
