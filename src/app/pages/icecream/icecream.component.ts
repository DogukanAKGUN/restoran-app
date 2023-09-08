import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {
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
    this.apiService.getIcecreamItems().subscribe({
      next: (response) => {
        this.menuItems= response;
       

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