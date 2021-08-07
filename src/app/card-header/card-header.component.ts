import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html'
})
export class CardHeaderComponent implements OnInit {

  @Input() title: string = ''
  showLogout = false
  constructor(
    private localStorage: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.localStorage.getStorageData('currentUser')) {
      this.showLogout = true
    }
  }

  logout(): void {
    this.localStorage.removeStorageData('currentUser')
    this.router.navigateByUrl('/login')
  }
}
