import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {
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
    this.apiService.getToastsItems().subscribe({
      next: (response) => {
        this.menuItems= response;
        console.log("data cold drinks",this.menuItems)

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
