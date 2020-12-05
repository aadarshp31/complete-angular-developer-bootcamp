import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


// https://api.github.com/users/aadarshp31
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserByUserName(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`)
  }

  getUserRepo(repoUrl: string) {
    return this.http.get(repoUrl)
  }

}
