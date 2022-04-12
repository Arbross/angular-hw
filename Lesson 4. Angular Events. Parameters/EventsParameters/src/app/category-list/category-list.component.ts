import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { categoryList } from '../category-list';
import categoriesJson from '../categories.json';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input()
  categories: Category[] = categoryList;

  constructor() { }

  ngOnInit(): void {
    for (let category of categoriesJson) {
      this.categories.push(<Category> { id: category.id, name: category.name });
    }
  }

  removeCategory(index: number): void {
    this.categories.splice(index, 1);
  }
}
