import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit{
  constructor(private modalService: NgbModal,private apiService: ApiServiceService, private router: Router) {}

  private alertMessage: TemplateRef<Object> | undefined;
  Types:any;
  Items:any;
  Item:any;

  closeResult = "";
  alertText = "";
  
  ngOnInit(): void {
    this.load_data()
  }
  load_data(){
    this.apiService.getItems().subscribe({
      next: (response) => {
        this.Items = response;

        this.Types = []
        for(let i = 0 ; i <= this.Items.length - 1; i++){
          
          if(!this.Types.includes(this.Items[i].type)){
            console.log("içeriyo mu", this.Types.includes(this.Items[i]))
            this.Types.push(this.Items[i].type)
          }
        }

      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });

    
  }

  newItem_dialog(m_modal: any) {
    this.Item = {
      _id: "",
      title: "",
      imageUrl: "",
      price: "",
      type: ""
    };
    this.open(m_modal);
  }

  updateUser_dialog(u:any, m_modal:any) {
    this.Item = {
      _id:u._id,
      title: u.title,
      imageUrl: u.imageUrl,
      price: u.price,
      type: u.type
    };
    this.open(m_modal);
  }

  deleteUser_dialog(u: any, m_modal: any) {
    this.Item = u;
    this.open(m_modal);
  }

  deleteUser(u:any) {
    let req = {
      _id: u._id,
    };
    this.apiService.deleteItem(req).subscribe({
      next: (response) => {
        let data: any = response;

        this.load_data();
      },
      error: (error) => {
        console.error("There was an error!", error);
        if (error.status == 401) {
          this.alertText = error.error.detail;
          this.alertMessage_dialog(this.alertMessage);
        }
      },
    });
  }


  saveItem(item:any) {
    this.apiService.saveItem(this.Item).subscribe({
      next: (response) => {
        let data: any = response;

        this.load_data();
      },
      error: (error) => {
        console.error("There was an error!", error);
        if (error.status == 401) {
          this.alertText = error.error.detail;
          this.alertMessage_dialog(this.alertMessage);
        }

        if (error.status == 500) {
          this.alertText = error.error.detail;
          this.alertMessage_dialog(this.alertMessage);
        }
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
  alertMessage_dialog(m_modal:any) {
    this.open(m_modal);
  }

  updateItem(u:any) {
    console.log("u ne ", u)
    this.apiService.updateItem(u).subscribe({
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
}
