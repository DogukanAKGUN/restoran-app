import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes, ExtraOptions, Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HotDrkinsComponent } from './pages/hot-drkins/hot-drkins.component';
import { ColdDrinksComponent } from './pages/cold-drinks/cold-drinks.component';
import { CanDrinksComponent } from './pages/can-drinks/can-drinks.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { EditItemsComponent } from './pages/edit-items/edit-items.component';
import { EditMenuItemsComponent } from './pages/edit-menu-items/edit-menu-items.component';
import { ToastsComponent } from './pages/toasts/toasts.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { IcecreamComponent } from './pages/icecream/icecream.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'hot-drinks', component: HotDrkinsComponent },
  { path: 'cold-drinks', component: ColdDrinksComponent },
  { path: 'can-drinks', component: CanDrinksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-menu-items', component: EditMenuItemsComponent },
  { path: 'edit-items', component: EditItemsComponent },
  { path: 'toasts', component: ToastsComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'icecream', component: IcecreamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
