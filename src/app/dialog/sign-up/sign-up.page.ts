import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signupForm: FormGroup;
  constructor(private modalControl: ModalController,private formBuild: FormBuilder,private authService : AuthService, private routes: Router) { 
    this.signupForm= this.formBuild.group({
      name:new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      contactnumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
      });
    }
  

  ngOnInit() {}

  
  onCheck(){
    console.log(this.signupForm.value);
    
    this.authService.registerUser(JSON.stringify(this.signupForm.value)).subscribe((res:any)=>{
      console.log(res);
    })
    
  }

  back()
  {
    this.routes.navigate(['/login']);

  }  
}
