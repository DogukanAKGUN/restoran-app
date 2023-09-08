import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(req:any) {
    return this.http.post(
      `http://127.0.0.1:5000/login`,req
    );
  }

  updateMenuItem(req:any) {
    return this.http.post(
      `http://127.0.0.1:5000/update-menu-item`,req
    );
  }

  updateItem(req:any) {
    return this.http.post(
      `http://127.0.0.1:5000/update-item`,req
    );
  }

  saveItem(req:any) {
    return this.http.post(
      `http://127.0.0.1:5000/save-item`,req
    );
  }

  deleteItem(req:any) {
    return this.http.post(
      `http://127.0.0.1:5000/delete-item`,req
    );
  }

  getMenuItems() {
    return this.http.get(
      `http://127.0.0.1:5000/script`
    );
  }

  getItems() {
    return this.http.get(
      `http://127.0.0.1:5000/get-items`
    );
  }

  getHotDrinkItems() {
    return this.http.get(
      `http://127.0.0.1:5000/hot-drinks`
    );
  }

  getColdDrinkItems() {
    return this.http.get(
      `http://127.0.0.1:5000/cold-drinks`
    );
  }

  getToastsItems() {
    return this.http.get(
      `http://127.0.0.1:5000/toasts`
    );
  }

  getSnacksItems() {
    return this.http.get(
      `http://127.0.0.1:5000/snacks`
    );
  }

  getIcecreamItems() {
    return this.http.get(
      `http://127.0.0.1:5000/icecream`
    );
  }

  getCandDrinkItems() {
    return this.http.get(
      `http://127.0.0.1:5000/can-drinks`
    );
  }
}
