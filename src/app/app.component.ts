import { Component,ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent{
  title = 'Restoran-App';
}

