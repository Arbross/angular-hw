import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output()
  onSave: EventEmitter<User> = new EventEmitter<User>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      code: ['', Validators.required],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      isBanned: ['', Validators.required],
    });
  }

  submit(): void {
    if(this.form.controls["name"].errors)
    {
      alert("Invalid data!");
    }
    else {
      // Transfer data to parent component
      this.onSave.emit(this.form.value);
    }
  }
}
