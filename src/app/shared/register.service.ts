import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private hc: HttpClient) { }

  registerUser(email: string, password: string, confirmPassword: string): Observable<any> {

    return this.hc.post('http://localhost:44386/api/Account/Register', { email: email, password: password, confirmPassword: confirmPassword });
  }

  login(userName: string, password: string): Observable<any> {
    const params = {
      grant_type: 'password',
      userName: userName,
      password: password
    };
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded'
    });
    const options = { headers: headers };
    const body: string = this.encodeParams(params);

    return this.hc.post('http://localhost:44386/token', body, options);
  }

  private encodeParams(params: any): string {
    let body = '';
    for (const key in params) {
      if (body.length) {
        body += '&';
      }
      body += key + '=';
      body += encodeURIComponent(params[key]);
    }
    return body;
  }
}
