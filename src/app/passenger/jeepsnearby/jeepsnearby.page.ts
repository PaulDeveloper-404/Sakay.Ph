import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-jeepsnearby',
  templateUrl: './jeepsnearby.page.html',
  styleUrls: ['./jeepsnearby.page.scss'],
})
export class JeepsnearbyPage implements OnInit {
  tripsData:any = [];
  

  constructor(public router:Router, private trips:TripsService) { }

  ngOnInit() {
    this.getAvailableRoute()
  }


  getAvailableRoute(){
    this.trips.getTrips().subscribe((data:any)=>{
      console.log(data.payload, "qwe")
      this.tripsData = data.payload;
    })
  }

  
  bookNowClick(trip){
    let user_id = JSON.parse(localStorage.getItem('CurrentUser')).users_id
    console.log(user_id, trip)

    let data = {
      trips_id: trip.trips_id,
      user_id: user_id,
      reserve_current: trip.trips_origin,
      reserve_destination: trip.trips_destination,
      reserve_description: 'into unknown',
      reserve_status: '',
    };

    this.trips.reserveSeat(JSON.stringify(data)).subscribe((data:any)=>{
      console.log(data)
    })
  }
  // trips_id, users_id, reserve_current, reserve_destination, reserve_description, reserve_status

  logout() {
    this.router.navigateByUrl('/login');
  }

}
