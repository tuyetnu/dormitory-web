import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getStudent(sort = '', filters = '', page = 1, pageSize = 5) {
    return this.httpClient.get(`${this.BASE_URL}api/Student/AdvancedGet?sorts=${sort}
    &filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
  importListStudent(data) {
    return this.httpClient.post(`${this.BASE_URL}api/Student`, data);
  }
}
