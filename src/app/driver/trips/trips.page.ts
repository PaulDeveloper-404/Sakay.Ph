import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateTripComponent } from 'src/app/dialog/create-trip/create-trip.component';
import { EditTripComponent } from 'src/app/dialog/edit-trip/edit-trip.component';
import { TripsService } from 'src/app/service/trips.service';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {
  trip: any;

  constructor(private trips: TripsService,private modalControl:ModalController,public router:Router) { }

  ngOnInit() {
    this.getTrips();
  }

  async createTrip() {

    this.router.navigateByUrl('/createtrip');

    // const modal = await this.modalControl.create({
    //   component: CreateTripComponent,
    // });

    // await modal.present();
  }

  async editTrip() {
    const modal = await this.modalControl.create({
      component: EditTripComponent,
    });

    await modal.present();
  }
  logout() {
    this.router.navigateByUrl('/login');
  }

  getTrips(){
      this.trips.getTrips().subscribe((res:any)=>{
          this.trip = res.payload;
          
      })
  }

}

