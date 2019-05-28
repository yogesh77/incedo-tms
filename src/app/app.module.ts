import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userService } from './service/app.service'
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,  ButtonModule, TableModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
