import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  acceptTrip() {
    console.log('accept trip');

  }

  rejectTrip() {
    console.log('reject trip');
  }
  logout() {
    this.router.navigateByUrl('/login');
  }


}
