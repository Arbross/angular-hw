import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserCredentialsDTO } from '../account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @Output()
  onSave: EventEmitter<IUserCredentialsDTO> = new EventEmitter<IUserCredentialsDTO>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required] // add regexp
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
