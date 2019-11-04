import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://localhost:44364/api/Rooms/MissingEquipmentRoom';
  getRoomMissEquipment() {
    return this.httpClient.get<any>(`${this.BASE_URL}`);
  }
}
