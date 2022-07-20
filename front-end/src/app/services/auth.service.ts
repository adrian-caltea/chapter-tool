import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const  observablet = new Observable((subscriber: any) => {
      subscriber.next({
        username: 'Adrian',
        password:'123456',
        'auth-token': 'ewr4234'
      });

      setTimeout(() => {
        subscriber.next();
        subscriber.complete();
      }, 1000);
    })

    return observablet;
    // this.http.post(AUTH_API + 'signin', {
    //   username,
    //   password
    // }, httpOptions);
  }

  register(username: string, email: string, password: string, role: object): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      role
    }, httpOptions);
  }
}
