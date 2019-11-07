import { Injectable } from '@angular/core';
import { SocialUserRespone } from '../model/socialUserRespone.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'https://dormywebservice.azurewebsites.net/';

  login(socialUser) {
    const api = 'api/Users/Login';
    return this.httpClient.post<SocialUserRespone>(this.baseUrl + api, socialUser);
  }
}
