import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getEquipment(sort = '', filters = '', page = 1, pageSize = 5) {
    console.log(`sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
    return this.httpClient.get<any>(`${this.BASE_URL}api/Equipments/AdvancedGet?sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
}
