import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
})
export class CreateTripComponent implements OnInit {

  constructor(private modalControl: ModalController) { }

  ngOnInit() {}

  createTripDismiss() {
    this.modalControl.dismiss();
  }

}
