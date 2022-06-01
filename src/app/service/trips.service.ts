import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost/sakayph-api/";

  getTrips() {
    return this.http.post(`${this.apiUrl}showtrips`, '');
  }

  reserveSeat(data: any) {
    return this.http.post(`${this.apiUrl}reserveseat`, data);
  }

  showReserve(id: any) {
    return this.http.post(`${this.apiUrl}showreserve/${id}`, '');
  }

  driverNotif(id: any) {
    return this.http.post(`${this.apiUrl}drivernotif/${id}`, '');
  }

  deleteReserve(id: any) {
    return this.http.post(`${this.apiUrl}deletereserve/${id}`, '');
  }

  addTrip(data: any) {
    return this.http.post(`${this.apiUrl}addtrip`, data)
  }

  updateTrip(data: any) {
    return this.http.post(`${this.apiUrl}updatetrip`, data)
  }

  updateStatus(data: any, id: any) {
    return this.http.post(`${this.apiUrl}updatestatus/${data}/${id}`, '')
  }
}
