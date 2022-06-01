import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
})
export class CreateTripComponent implements OnInit {

  tripForm: FormGroup;

  constructor(private modalControl: ModalController,private formBuild: FormBuilder,) { 

    this.tripForm = this.formBuild.group({
      trips_origin:new FormControl('', Validators.required),
      trips_distination:new FormControl('', Validators.required),
      trips_passenger:new FormControl('', Validators.required),
      trips_bodynum:new FormControl('', Validators.required),
    })
  }

  ngOnInit() {}

  createTripDismiss() {
    console.log(this.tripForm.value);
    
    this.modalControl.dismiss();
  }




}
