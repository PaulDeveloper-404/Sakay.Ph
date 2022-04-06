import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  imgUrl: any;

  constructor() { }

  ngOnInit() {
  }

  editProfile() {
    console.log('edit profile');
  }

  logout() {
    console.log('logout');
  }
}
