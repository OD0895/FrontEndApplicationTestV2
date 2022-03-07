import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  readonly urlApi: string = `${environment.urlApi}/auth/`;

  constructor(private http: HttpClient, private router: Router) {}

  login( email:string, password:string ) {
    const validate: string = `${email}:${password}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(validate)}`
      })
    };
    return this.http.post(`${this.urlApi}/sign-in`,{ }, httpOptions);
  }

  setUser(access_token) {
    localStorage.setItem('token_app', access_token);
    this.router.navigate(['/todo-list']);
  }

  isLoggedIn() {
    return localStorage.getItem('token_app') != null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
