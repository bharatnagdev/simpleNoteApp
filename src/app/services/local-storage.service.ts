import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getStorageData(key: string): string {
    return localStorage.getItem(key) || ''
  }

  setStorageData(key: string, data: any) {
    localStorage.setItem(key,JSON.stringify(data))
  }

  removeStorageData(key: string) {
    localStorage.removeItem(key)
  }
}
