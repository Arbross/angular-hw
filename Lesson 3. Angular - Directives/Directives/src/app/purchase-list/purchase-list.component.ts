import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { purchaseList } from '../purchase-list';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  purchases: Purchase[]; 

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.purchases = purchaseList, 4000);
  }

}
