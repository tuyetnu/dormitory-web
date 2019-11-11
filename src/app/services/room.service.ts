import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getRoomMissEquipment(buildingId, page = 1, pageSize = 10) {
    const api = 'api/Rooms/GetAllMissingEquipmentRoom';
    const params = new HttpParams().set('buildingId', buildingId);
    return this.httpClient.get<any>(`${this.BASE_URL}${api}?pageSize=${pageSize}`, {params});
  }
}
