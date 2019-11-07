import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getRoomMissEquipment() {
    const api = 'api/Rooms/MissingEquipmentRoom';
    return this.httpClient.get<any>(`${this.BASE_URL}${api}`);
  }
}
