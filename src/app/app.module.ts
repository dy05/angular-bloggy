import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NgIf} from "@angular/common";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "login", component: LoginComponent },
  // { path: "updateProvider/:id", component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), NgIf, ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    LoginComponent
  ]
})
class AppRoutingModule { }

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
