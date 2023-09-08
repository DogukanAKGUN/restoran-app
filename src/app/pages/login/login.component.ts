import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) {
    // Form Kontrol Muhabbeti için
  }
  username ="";
  password ="";
  data: any;
  ngOnInit(): void {
    
  }

  login(){
    let req = {username: this.username,password:this.password}

    this.apiService.login(req).subscribe({
      next: (response) => {
         this.data = response
        console.log(response)
        if(this.data['result'] == "ok"){
          localStorage.setItem("logged","true")
          this.router.navigate(['/edit-menu-items'])
        }
        else {
          localStorage.setItem("logged","false")
          this.router.navigate(['/'])
        } 
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }
}
