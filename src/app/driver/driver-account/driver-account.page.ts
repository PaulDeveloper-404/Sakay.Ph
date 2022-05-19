import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditDriverComponent } from 'src/app/dialog/edit-driver/edit-driver.component';
@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.page.html',
  styleUrls: ['./driver-account.page.scss'],
})
export class DriverAccountPage implements OnInit {

  user: any;

  constructor(private modalControl:ModalController,public router:Router) { }

  ngOnInit() {
  }

  async editProfile() {
    const modal = await this.modalControl.create({
      component: EditDriverComponent,
    });

    await modal.present();
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
