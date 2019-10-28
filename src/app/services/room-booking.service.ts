import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';

  getRoomBooking(sort = '', filters = '', page = 1, pageSize = 5) {
    console.log(`sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
    return this.httpClient.get(`${this.BASE_URL}api/RoomBookings?sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
}
