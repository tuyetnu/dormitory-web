import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://localhost:44364/api/Rooms/Building';
  newBuilding(data) {
    return this.httpClient.post(`${this.BASE_URL}`, data);
  }
}
