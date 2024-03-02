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
      `https://flask-production-7521.up.railway.app/login`,req
    );
  }

  updateMenuItem(req:any) {
    return this.http.post(
      `https://flask-production-7521.up.railway.app/update-menu-item`,req
    );
  }

  updateItem(req:any) {
    return this.http.post(
      `https://flask-production-7521.up.railway.app/update-item`,req
    );
  }

  saveItem(req:any) {
    return this.http.post(
      `https://flask-production-7521.up.railway.app/save-item`,req
    );
  }

  deleteItem(req:any) {
    return this.http.post(
      `https://flask-production-7521.up.railway.app/delete-item`,req
    );
  }

  getMenuItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/script`
    );
  }

  getItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/get-items`
    );
  }

  getHotDrinkItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/hot-drinks`
    );
  }

  getColdDrinkItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/cold-drinks`
    );
  }

  getToastsItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/toasts`
    );
  }

  getSnacksItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/snacks`
    );
  }

  getIcecreamItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/icecream`
    );
  }

  getCandDrinkItems() {
    return this.http.get(
      `https://flask-production-7521.up.railway.app/can-drinks`
    );
  }
}
