import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  trip: any;
  driver_id: any = JSON.parse(localStorage.getItem('CurrentUser')).driver_id


  constructor(private trips: TripsService,public router:Router) { }

  ngOnInit() {
    this.getTrips();
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
  
  getTrips(){
    console.log(this.driver_id);

    this.trips.driverNotif(JSON.stringify(this.driver_id)).subscribe((res:any)=>{
        this.trip = res.payload;
        console.log(this.trip);
        
    })
}

}
