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
  driver_id: any = JSON.parse(localStorage.getItem('CurrentUser')).driver_id;
  driver_address:any  = JSON.parse(localStorage.getItem('CurrentUser')).driver_address;
  driver_contact:any  = JSON.parse(localStorage.getItem('CurrentUser')).driver_contact;
  driver_name:any = JSON.parse(localStorage.getItem('CurrentUser')).driver_name;
  driver_uname:any = JSON.parse(localStorage.getItem('CurrentUser')).driver_uname;
  
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
