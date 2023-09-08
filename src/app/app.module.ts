import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HotDrkinsComponent } from './pages/hot-drkins/hot-drkins.component';
import { ColdDrinksComponent } from './pages/cold-drinks/cold-drinks.component';
import { CanDrinksComponent } from './pages/can-drinks/can-drinks.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { EditMenuItemsComponent } from './pages/edit-menu-items/edit-menu-items.component';
import { EditItemsComponent } from './pages/edit-items/edit-items.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodsComponent } from './pages/foods/foods.component';
import { ToastsComponent } from './pages/toasts/toasts.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { IcecreamComponent } from './pages/icecream/icecream.component';




@NgModule({
  declarations: [
    AppComponent,
    HotDrkinsComponent,
    ColdDrinksComponent,
    CanDrinksComponent,
    MainComponent,
    LoginComponent,
    EditMenuItemsComponent,
    EditItemsComponent,
    FoodsComponent,
    ToastsComponent,
    SnacksComponent,
    IcecreamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ 

  
}
