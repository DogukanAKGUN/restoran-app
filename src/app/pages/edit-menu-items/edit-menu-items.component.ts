import { Component, TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-edit-menu-items',
  templateUrl: './edit-menu-items.component.html',
  styleUrls: ['./edit-menu-items.component.css']
})
export class EditMenuItemsComponent implements OnInit {
  
  constructor(private modalService: NgbModal,private apiService: ApiServiceService, private router: Router) {}

  menuItems:any;
  menuItem:any;

  ngOnInit(): void {
    this.load_data()
  }
  Item:any;
  closeResult = "";
  alertText = "";
  private alertMessage: TemplateRef<Object> | undefined;
 

  load_data(){
    this.apiService.getMenuItems().subscribe({
      next: (response) => {
        this.menuItems = response;
        
        console.log("menuitems:",this.menuItems)
        console.log("menuitem:",this.menuItem)
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  newItem_dialog(m_modal:any) {
    this.Item = {
      email: "",
      full_name: "",
    };
    this.open(m_modal);
  }

  updateUser_dialog(u:any, m_modal:any) {
    this.menuItem = {
      _id:u._id,
      title: u.title,
      imageUrl: u.imageUrl,
      route: u.route
    };
    this.open(m_modal);
  }
  alertMessage_dialog(m_modal:any) {
    this.open(m_modal);
  }
  // TODO: Update muhabbetine bak
  updateItem(u:any) {
    console.log("u ne ", u)
    this.apiService.updateMenuItem(u).subscribe({
      next: (response) => {
        let data: any = response;

        this.load_data();
      },
      error: (error) => {
        console.error("There was an error!", error);
        if (error.status == 401) {
          this.alertText = error.error.detail;
          this.alertMessage_dialog(this.alertMessage);
          this.load_data();
        }

        if (error.status == 500) {
          this.alertText = error.error.detail;
          this.alertMessage_dialog(this.alertMessage);
        }
      },
    });
  }

  navigator(){
    this.router.navigate(['/edit-items'])
  }

  deleteUser_dialog(u: any, m_modal: any) {
    this.menuItem = u;
    this.open(m_modal);
  }
  
}
