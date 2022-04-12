import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  constructor() {}

  submit(category: Category): void {
    // Saving data... (request to edit genre)
    //this.router.navigate(["/categories/"]);
  }
}
