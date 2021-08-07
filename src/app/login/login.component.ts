import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  isShow = false;
  loginForm: FormGroup;
  users: any = []
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorage: LocalstorageService
        
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  get form() { return this.loginForm.controls; }
  ngOnInit(): void {
    if (this.localStorage.getStorageData('users')) {
      this.users = JSON.parse(this.localStorage.getStorageData('users'))
    }
  }

  onSubmit(): void {
    let formValues = this.form
    let user = this.users.filter((item: any) => item.username == formValues.username.value)[0]
    console.log(user);
    
    if (user && user.password == formValues.password.value) {
      this.localStorage.setStorageData('currentUser', formValues.username.value)
      this.router.navigateByUrl('/note-list')
    } else {
      alert('invalid username or password')
    }
  }
}
