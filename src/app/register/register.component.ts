import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;
  isShow = false;
  registerationForm: FormGroup;
  users: any = []
  constructor(
    private formBuilder: FormBuilder,
    private localStorage: LocalstorageService,
    private router: Router,
  ) {
    this.registerationForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  get form() { return this.registerationForm.controls; }

  ngOnInit(): void {
    if (this.localStorage.getStorageData('users')) {
      this.users = JSON.parse(this.localStorage.getStorageData('users'))
    }
    
  }

  onSubmit(): void {
    let values = this.form
    this.users.push({
      name: values.name.value,
      username: values.username.value,
      password: values.password.value
    })
    this.localStorage.setStorageData('users', this.users)
  }
}
