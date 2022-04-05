import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { LoginService } from '../service/login.service';
import { SignupComponent } from '../dialog/signup/signup.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  roundClock: string='';
  
  constructor(private modalControl: ModalController,private formBuild: FormBuilder,private loginService: LoginService, private routes: Router) { 
  this.loginForm = this.formBuild.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async signUp() {
    const modal = await this.modalControl.create({
      component: SignupComponent,
    });

    await modal.present();
  }

  onCheck(){

  }

  checkTime() {
    let date: Date = new Date();

    if(date.getHours() >= 0 && date.getHours() < 12) {
      if(date.getMinutes() >= 0 && date.getMinutes() < 59) {
        this.roundClock = 'Good morning'
      }
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      if(date.getMinutes() >= 0 && date.getMinutes() < 59) {
        this.roundClock = 'Good Afternoon'
      }
    } else if (date.getHours() >= 18 && date.getHours() < 24) {
      if(date.getMinutes() >= 0 && date.getMinutes() < 59) {
        this.roundClock = 'Good Evening'
      }
    }
  }
  








}








