import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  setLocalStorage(key: any, value: any) {
    localStorage.setItem(key, value)
  }
  getLocalStorage(key: any):any {
      return localStorage.getItem(key)
  }
  removeLocalStorage(key: any) {
    localStorage.removeItem(key)
  }
}
