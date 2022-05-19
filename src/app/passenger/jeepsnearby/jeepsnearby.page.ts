import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeepsnearby',
  templateUrl: './jeepsnearby.page.html',
  styleUrls: ['./jeepsnearby.page.scss'],
})
export class JeepsnearbyPage implements OnInit {

  

  constructor(public router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
