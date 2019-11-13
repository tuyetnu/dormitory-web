import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenewContractService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'https://dormywebservice.azurewebsites.net/';
  getRenewContract(sort = '', filters = '', page = 1, pageSize = 5) {
    return this.httpClient.get<any>(`${this.BASE_URL}api/ContractRenewal/AdvancedGet?sorts=${sort}&filters=${filters}&page=${page}&pageSize=${pageSize}`);
  }
  reject(data) {
    return this.httpClient.put(`${this.BASE_URL}api/ContractRenewal/RejectContractRenewal`, data);
  }
  approved(data) {
    return this.httpClient.put<any>(`${this.BASE_URL}api/ContractRenewal/ApproveContractRenewal`, data);
  }
}
