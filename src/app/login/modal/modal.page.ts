import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  loginForm;

  constructor(public router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  driver(){
    //this.router.navigateByUrl('/login');
    this.authService.loginDriver(this.loginForm).subscribe((data:any)=>{
      console.log(data);
    })

  }

  passenger(){
    //this.router.navigateByUrl('/login');
    console.log(this.loginForm)
    this.authService.loginUser(JSON.stringify(this.loginForm)).subscribe((data:any)=>{
      console.log(data);
    })

  }
}
