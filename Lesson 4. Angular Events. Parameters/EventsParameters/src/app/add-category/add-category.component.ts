import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import categoriesJson from '../categories.json';
import { Category } from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private httpClient: HttpClient) {}

  submit(category: Category): void {
    categoriesJson.push(<Category> { id: category.id, name: category.name });
    
    const fs = require('fs');
    fs.writeFileSync("../categories.json", JSON.stringify(categoriesJson));
    
    alert("Created!");
  }
}
