import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
