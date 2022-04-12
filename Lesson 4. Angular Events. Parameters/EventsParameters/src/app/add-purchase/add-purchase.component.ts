import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Purchase } from '../purchase';
import purchasesJson from '../purchases.json';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      number: ['', Validators.compose([Validators.required, Validators.min(0)])],
      price: ['', Validators.compose([Validators.required, Validators.min(1)])],
      date: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      salePercent: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])],
      purchaseStatus: ['', Validators.compose([Validators.required])],
      buyerName: ['', Validators.compose([Validators.required])],
      buyerSurname: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
    if (this.form.controls["date"].errors)
    {
      alert("Invalid data!");
    }
    else {
      alert("Saved!");
      
      purchasesJson.push(<Purchase> { number: this.form.controls["number"].value, description: this.form.controls["description"].value, date: this.form.controls["date"].value, price: this.form.controls["price"].value, buyerName: this.form.controls["buyerName"].value, buyerSurname: this.form.controls["buyerSurname"].value, salePercent: this.form.controls["salePercent"].value, purchaseStatus: this.form.controls["purchaseStatus"].value});
      
      const fs = require('fs');
      fs.writeFile("./purchases.json", JSON.stringify(purchasesJson));
    }
  }
}
