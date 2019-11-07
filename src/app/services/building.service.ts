import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  newBuilding(data) {
    const api = 'api/Rooms/Building';
    return this.httpClient.post(`${this.BASE_URL}${api}`, data);
  }
  getBuilding() {
    const api = 'api/Rooms/Building';
    return this.httpClient.get<any>(`${this.BASE_URL}${api}`);
  }

  getBuildingById(buildingId) {
    const api = 'api/Rooms/BuildingById';
    const params = new HttpParams().set('buildingId', buildingId);
    return this.httpClient.get<any>(`${this.BASE_URL}${api}`, { params: params });
  }
}
