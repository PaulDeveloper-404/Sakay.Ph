import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.scss'],
})
export class EditPassengerComponent implements OnInit {

  constructor(private modalControl:ModalController) { }
  editProfileDismiss() {
    this.modalControl.dismiss();
  }

  ngOnInit() {}

}
