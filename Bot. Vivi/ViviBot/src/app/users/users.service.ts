import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string;
  usersUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.usersUrl = this.apiUrl + "User/";
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getById(id: string) {
    return this.http.get(this.usersUrl + id);
  }

  create(user: User) {
    return this.http.post(this.usersUrl, user);
  }

  remove(id: string) {
    return this.http.delete(this.usersUrl + id);
  }

  update(user: User) {
    return this.http.put(this.usersUrl, user);
  }
}
