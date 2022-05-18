import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {
  user:any;
  imgUrl: any;
  profileForm:FormGroup
  constructor(private router: Router, private FB:FormBuilder) { }

  ngOnInit() {
    this.profileForm=this.FB.group({
      email:['',Validators.required],
      password:['',Validators.required],
  })

  // editProfile() {
  //   console.log('edit profile');
  // }

  // logout() {
  //   console.log('logout');
  // }
}
}
