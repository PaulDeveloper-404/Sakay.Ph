import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditPassengerComponent } from 'src/app/dialog/edit-passenger/edit-passenger.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user:any;
  imgUrl: any;

  constructor(private modalControl:ModalController,public router:Router) { }

  ngOnInit() {
  }

  async editProfile() {
    const modal = await this.modalControl.create({
      component: EditPassengerComponent,
    });

    await modal.present();
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
