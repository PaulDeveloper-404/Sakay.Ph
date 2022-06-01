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
  item: any;

  constructor(public router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  driver(){
    this.authService.loginDriver(this.loginForm).subscribe((data:any)=>{
      console.log(data);
      if(data.result == true){
        localStorage.setItem('CurrentUser',  JSON.stringify(data.payload[0]));
        this.router.navigateByUrl('/driver');
      }
    })
    
  }
  
  passenger(){
    console.log(this.loginForm)
    this.authService.loginUser(JSON.stringify(this.loginForm)).subscribe((data:any)=>{
      console.log(data);
      if(data.result == true){
        localStorage.setItem('CurrentUser',  JSON.stringify(data.payload[0]));
        this.router.navigateByUrl('/passenger');
      }
    })

  }
}
