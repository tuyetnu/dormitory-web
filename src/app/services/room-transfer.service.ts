import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomTransferService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getRoomTransfer(sort = '', filters = '', page = 1, pageSize = 5) {
    console.log(filters);
    return this.httpClient.get<any>(`${this.BASE_URL}api/RoomTransfer/AdvancedGetRoomTransfer?sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
  rejectRequest(data) {
    return this.httpClient.put(`${this.BASE_URL}api/RoomTransfer/RejectRoomTransfer`, data);
  }
  approveRoomTransfer(id) {
    return this.httpClient.put<any>(`${this.BASE_URL}api/RoomTransfer/ApproveRoomTransfer/${id}`, null);
  }
}
