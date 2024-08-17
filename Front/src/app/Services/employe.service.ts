import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Models/Employe.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private apiUrl = 'http://127.0.0.1:3000/employe';

  constructor(private http: HttpClient) { }

  addEmploye(employeData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ajouter`, employeData);
  }

  login(loginData: { login: string; pw: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  getAllEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.apiUrl}/all`);
  }

  getEmployeById(id: string): Observable<Employe> {
    return this.http.get<Employe>(`${this.apiUrl}/getbyid/${id}`);
  }

  updateEmploye(id: string, employeData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, employeData);
  }

  deleteEmploye(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
