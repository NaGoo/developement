import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';



import { AppComponent }      from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceMasterComponent } from './service-master/service-master.component';

import { ClientMasterComponent } from './client-master/client-master.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // HttpClient
    
  ],
  declarations: [
    AppComponent,
    ServiceMasterComponent,
    ClientMasterComponent,
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
