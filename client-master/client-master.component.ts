import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent  {
client= new FormGroup({
  name : new FormControl('',Validators.required)
})
  

  Onsubmit(a){
    console.log(a);
  }
get name(){
  return this.client.get("name")
}

}

