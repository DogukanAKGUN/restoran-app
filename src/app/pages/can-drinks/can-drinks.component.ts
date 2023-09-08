import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-can-drinks',
  templateUrl: './can-drinks.component.html',
  styleUrls: ['./can-drinks.component.css']
})
export class CanDrinksComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) {
    // Form Kontrol Muhabbeti için
  }
  
  menuItems:any;

  ngOnInit() {
    this.load_data()
  }

  load_data(){
    this.apiService.getCandDrinkItems().subscribe({
      next: (response) => {
        this.menuItems = response;
        console.log("data can drinks",this.menuItems)

      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }

  home(){
    this.router.navigate(['']);
  }
}
