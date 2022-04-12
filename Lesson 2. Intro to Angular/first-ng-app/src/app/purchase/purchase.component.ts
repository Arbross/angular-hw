import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchase: Purchase = {
    number: 1,
    description: "Chleb",
    price: 20,
    date: new Date(),
    salePercent: 100,
    buyerName: "Vasya",
    buyerSurname: "Vasyov"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
