import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost/smartjeep-api/";

  authUser(user: string, pass: string): Observable<boolean>  {
    return this.http.get<boolean>(this.apiUrl + 'login/' + user +"/"+ pass);
  }

  getUser(id: any) {
    return this.http.post(`${this.apiUrl}getuser/${id}`, '');
  }

  getDriver(id: any) {
    return this.http.post(`${this.apiUrl}getdriver/${id}`, '');
  }

  loginUser(auth: any) {
    return this.http.post(`${this.apiUrl}loginuser`, auth);
  }

  loginDriver(auth: any) {
    return this.http.post(`${this.apiUrl}logindriver`, auth);
  }

  registerUser(data: any) {
    return this.http.post(`${this.apiUrl}registeruser`, data);
  }

  registerDriver(data: any) {
    return this.http.post(`${this.apiUrl}registerdriver`, data);
  }

  updateUser(data: any, id: any) {
    return this.http.post(`${this.apiUrl}updateuser/${id}`, data);
  }

  updateDriver(data: any, id: any) {
    return this.http.post(`${this.apiUrl}updatedriver/${id}`, data);
  }
}

