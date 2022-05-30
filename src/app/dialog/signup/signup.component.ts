import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private modalControl: ModalController,private formBuild: FormBuilder,private authService : AuthService, private routes: Router) { 
    this.signupForm= this.formBuild.group({
      name:['', Validators.required],
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      contactnumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      });
    }
  

  ngOnInit() {}

  signUpDismiss() {
    this.modalControl.dismiss();
    
  }
  onCheck(){
    console.log(this.signupForm.value);
    
    
  }

}
