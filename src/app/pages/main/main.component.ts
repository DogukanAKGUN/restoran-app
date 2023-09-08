import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Restoran-App';
  
  menuItems: any;
  ngOnInit() {
    this.load_data();
  }

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) {
    // Form Kontrol Muhabbeti için
  }

  load_data(){
    this.apiService.getMenuItems().subscribe({
      next: (response) => {
        this.menuItems= response;
        console.log("data",this.menuItems)

      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }

  toItems(route:any){
    this.router.navigate(['/'+route])
  }
  
}
