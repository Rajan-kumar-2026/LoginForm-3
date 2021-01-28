import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$!: BehaviorSubject<boolean>;
  
  constructor() {
    const hasToken = !!localStorage.getItem('token');
    this.isLoggedIn$ = new BehaviorSubject(hasToken);
  }
}
