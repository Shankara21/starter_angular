import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private HttpClient: HttpClient, private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) { }

  // Login
  Login(data: any) {
    return this.HttpClient.post(environment.apiUrl + '/users/login', data);
  }
  // Register
  Register(data: any) {
    return this.HttpClient.post(environment.apiUrl + '/users/register', data);
  }

  // SetToken
  SetToken(token: string) {
    this.cookieService.delete(environment.token);
    this.cookieService.set(environment.token, token, 8 / 24);
  }
  // GetToken
  GetToken() {
    return this.cookieService.get(environment.token);
  }

  // DeleteToken
  DeleteToken() {
    this.cookieService.delete(environment.token);
  }

  // GetPayload
  GetPayload() {
    const token = this.GetToken();
    if (token) {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } else {
      return null;
    }
  }
}
