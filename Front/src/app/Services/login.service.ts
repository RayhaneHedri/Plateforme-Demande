import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://127.0.0.1:3000/employe';

  constructor(private http: HttpClient) {}

  login(loginData: { login: string; pw: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }
}
