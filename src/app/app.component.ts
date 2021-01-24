import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginform3';

  isLoggedIn!: boolean;

  constructor(private cs: CommonService) {
    this.cs.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
  }

  logOut() {
    localStorage.clear();
    this.cs.isLoggedIn$.next(false);
  }
}
