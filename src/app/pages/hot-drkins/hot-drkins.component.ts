import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-hot-drkins',
  templateUrl: './hot-drkins.component.html',
  styleUrls: ['./hot-drkins.component.css']
})
export class HotDrkinsComponent implements OnInit {
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
    this.apiService.getHotDrinkItems().subscribe({
      next: (response) => {
        this.menuItems= response;
        console.log("data hot drinks",this.menuItems)

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
