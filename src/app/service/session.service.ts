import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) {}

  encodeData(data: any) {
    var JSONToString = JSON.stringify(data)
    var convertToBase64 = btoa(JSONToString);
    sessionStorage.setItem('raw', convertToBase64);
  }

  decodeData() {
    var data: any = sessionStorage.getItem('raw');
    var base64ToParse = atob(data);

    return JSON.parse(base64ToParse);
  }

  deleteData() {
    sessionStorage.removeItem("raw");
  }
}
