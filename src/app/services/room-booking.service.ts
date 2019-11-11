import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getRoomBooking(sort = '', filters = '', page = 1, pageSize = 5) {
    return this.httpClient.get<any>(`${this.BASE_URL}api/RoomBookings?sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
  getRoomBookingDetail(id) {
    return this.httpClient.get<any>(`${this.BASE_URL}api/RoomBookings/GetDetail/${id}`);
  }
  rejectRequest(data) {
    return this.httpClient.put(`${this.BASE_URL}api/RoomBookings/RejectRoomBooking`, data);
  }
  completeRequest(id) {
    return this.httpClient.put<any>(`${this.BASE_URL}api/RoomBookings/CompleteRoomBooking/${id}`, null);
  }
  approveRoomBooking(id) {
    return this.httpClient.put<any>(`${this.BASE_URL}api/RoomBookings/ApproveRoomBooking/${id}`, null);
  }
  importListRoomBooing(data) {
    return this.httpClient.post(`${this.BASE_URL}api/RoomBookings/ImportRoomBooking`, data);
  }
}
