import { Component, OnInit } from '@angular/core';
import {  FormControl,FormGroup,Validators, FormControlName } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.css']
})
export class ServiceMasterComponent implements OnInit {
  constructor() { }
  service=new FormGroup({
    category : new FormControl('',Validators.required),
    serviceCode : new FormControl('',Validators.required),
    clientId : new FormControl('',Validators.required),
    locationId : new FormControl('',Validators.required),
    vehicleId : new FormControl('',Validators.required),
    leadTime : new FormControl('',Validators.required),
    intervalTime : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    dayCharge : new FormControl('',Validators.required),
    nightCharge : new FormControl('',Validators.required),
    tax : new FormControl('',Validators.required),
    displayToCustomer : new FormControl('',Validators.required)})

  ngOnInit(): void {
  }
  onSubmit(a){
    console.log(a);
  }
 get category(){return this.service.get('category')}
 get serviceCode(){return this.service.get('serviceCode')}
 get clientId(){return this.service.get('clientId')}
 get locationId(){return this.service.get('locationId')}
 get vehicleId(){return this.service.get('vehicleId')}
 get description(){return this.service.get('description')}
 get leadTime(){return this.service.get('leadTime')}
 get intervalTime(){return this.service.get('intervalTime')}
 get name(){return this.service.get('name')}
 get dayCharge(){return this.service.get('dayCharge')}
 get nightCharge(){return this.service.get('nightCharge')}
 get tax(){return this.service.get('tax')}
 get displayToCustomer(){return this.service.get('displayToCustomer')} 
}
