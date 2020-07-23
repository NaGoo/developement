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
    category:new FormControl('',Validators.required),
    code:new FormControl('',Validators.required),
    clientId:new FormControl('',Validators.required),
    locationId:new FormControl('',Validators.required),
    vehicleId:new FormControl('',Validators.required),
    leadtime:new FormControl('',Validators.required),
    intervaltime:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    d_amount:new FormControl('',Validators.required),
    n_amount:new FormControl('',Validators.required),
    tax:new FormControl('',Validators.required),
    display:new FormControl('',Validators.required)})

  ngOnInit(): void {
  }
  onSubmit(a){
    console.log(a);
  }
 get category(){return this.service.get('category')}
 get code(){return this.service.get('code')}
 get clientId(){return this.service.get('clientId')}
 get locationId(){return this.service.get('locationId')}
 get vehicleId(){return this.service.get('vehicleId')}
 get description(){return this.service.get('description')}
 get leadtime(){return this.service.get('leadtime')}
 get intervaltime(){return this.service.get('intervaltime')}
 get name(){return this.service.get('name')}
 get d_amount(){return this.service.get('d_amount')}
 get n_amount(){return this.service.get('n_amount')}
 get tax(){return this.service.get('tax')}
 get display(){return this.service.get('display')} 
}
