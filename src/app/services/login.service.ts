import { SocialUserRespone } from './../model/socialUserRespone.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://dormywebservice.azurewebsites.net/api/Users/Login';

  login(socialUser) {
    return this.http.post<SocialUserRespone>(this.baseUrl, socialUser);
  }
}
