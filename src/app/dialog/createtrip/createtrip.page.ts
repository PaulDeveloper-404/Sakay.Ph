import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { TripsService } from 'src/app/service/trips.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-createtrip',
  templateUrl: './createtrip.page.html',
  styleUrls: ['./createtrip.page.scss'],
})
export class CreatetripPage implements OnInit {

  tripForm: FormGroup;

  driver_id = JSON.parse(localStorage.getItem('CurrentUser')).driver_id;

  constructor(private routes: Router,private tripservice: TripsService, private modalControl: ModalController,private formBuild: FormBuilder,) { 

    this.tripForm = this.formBuild.group({
      driver_id: [this.driver_id],
      trips_origin:new FormControl('', Validators.required),
      trips_distination:new FormControl('', Validators.required),
      trips_passenger:new FormControl('', Validators.required),
      trips_bodynum:new FormControl('', Validators.required),
      trips_isArchived:[1]
    })
  }

  ngOnInit() {}

  createTripDismiss() {
    console.log(this.tripForm.value);
    
    this.tripservice.addTrip(this.tripForm.value).subscribe((res:any)=>{
      console.log(res);
    })

  }

  back(){
    
    this.routes.navigateByUrl('/driver/trips');
  }


}
