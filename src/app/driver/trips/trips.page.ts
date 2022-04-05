import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTripComponent } from 'src/app/dialog/create-trip/create-trip.component';
import { EditTripComponent } from 'src/app/dialog/edit-trip/edit-trip.component';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(private modalControl:ModalController) { }

  ngOnInit() {
  }

  async createTrip() {
    const modal = await this.modalControl.create({
      component: CreateTripComponent,
    });

    await modal.present();
  }

  async editTrip() {
    const modal = await this.modalControl.create({
      component: EditTripComponent,
    });

    await modal.present();
  }

}
