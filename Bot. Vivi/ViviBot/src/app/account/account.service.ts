import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../users/user';
import { ILoginResponseDTO } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  tokenKey: string = "token";
  apiUrl: string;
  accountUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.accountUrl = this.apiUrl + "authentication/";
   }

  isAuthenticated(): boolean {
    let token: string = localStorage.getItem(this.tokenKey);
    if (!token) return false;

    // check expiration

    return true;
  }

  login(credentials: User): Observable<ILoginResponseDTO> {
    return this.http.post<ILoginResponseDTO>(this.accountUrl + "login", credentials);
  }
  
  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  register(credentials: User): Observable<any> {
    return this.http.post(this.accountUrl + "register", credentials);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
