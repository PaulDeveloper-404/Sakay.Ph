import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss'],
})
export class EditDriverComponent implements OnInit {

  constructor(private modalControl:ModalController) { }
  editProfileDismiss() {
    this.modalControl.dismiss();
  }

  ngOnInit() {}

}
