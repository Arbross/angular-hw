import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { randomInt } from 'crypto';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from '../category';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
  @Output()
  onSave: EventEmitter<Category> = new EventEmitter<Category>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      // this.form = this.formBuilder.group({
      //   name: ['', Validators.required]
      // });
  
      // this.activatedRoute.params.subscribe(params => {
      //   this.category = {id: 1, name: "Test Genre"};
      //   this.form.patchValue(this.category);
      // });

      // this.form = this.formBuilder.group({
      //   name: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
      // });
      this.form = this.formBuilder.group({
        name: ['', Validators.required]
      });
  }

  submit(): void {
    if(this.form.controls["name"].errors)
    {
      alert("Invalid data!");
    }
    else {
      // transfer data to parent component
      this.onSave.emit(<Category> { id: 4, name: this.form.value });
    }
  }
}
