import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []

  constructor(private http: HttpClient) { }

  getAuthors(): User[] {
    return this.users.filter((u) => u.name)
  }

  fetchUsers() {
    return this.http.get(environment.apiURI + '/authors/list')
  }
}
