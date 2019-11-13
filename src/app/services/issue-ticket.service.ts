import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueTicketService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getIssue(sort = '', filters = '', page = 1, pageSize = 5) {
    return this.httpClient.get<any>(`${this.BASE_URL}api/IssueTickets/AdvancedGet?sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
}
