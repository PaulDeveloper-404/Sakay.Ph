import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss'],
})
export class EditTripComponent implements OnInit {

  constructor(private modalControl: ModalController) { }

  ngOnInit() {}

  editTripDismiss() {
    this.modalControl.dismiss();
  }

}
