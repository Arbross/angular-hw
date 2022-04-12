import { Component, Input, OnInit } from '@angular/core';
import { Purchase, Status } from '../purchase';
import { purchaseList } from '../purchase-list';
import purchaseJson from '../purchases.json';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})

export class PurchaseListComponent implements OnInit {
  @Input()
  purchases: Purchase[] = purchaseList; 

  constructor() { }

  ngOnInit(): void {
    for (let purchase of purchaseJson) {
      this.purchases.push(<Purchase> { number: purchase.number, description: purchase.description, date: purchase.date, price: purchase.price, buyerName: purchase.buyerName, buyerSurname: purchase.buyerSurname, salePercent: purchase.salePercent, purchaseStatus: purchase.purchaseStatus });
    }
  }

  removePurchase(index: number): void {
    this.purchases.splice(index, 1);
  }

  changeStatusClosed(index: number): void {
    this.purchases[index].purchaseStatus = Status.Closed;
  }
}
