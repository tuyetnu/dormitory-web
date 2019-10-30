import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getParamTypes() {
    return this.httpClient.get<any>(`${this.BASE_URL}/api/ParamTypes`);
  }
  getByParamTypeById(paramTypeId) {
    return this.httpClient.get<any>(`${this.BASE_URL}/api/Params/GetAllByParamType/${paramTypeId}`);
  }
}
