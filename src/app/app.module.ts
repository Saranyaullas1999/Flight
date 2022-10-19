import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddflightComponent } from './addflight/addflight.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewflightComponent } from './viewflight/viewflight.component';



const appRoutes:Routes=[
  {
    path:"",component:AddflightComponent
  },
  {
    path:"view",component:ViewflightComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddflightComponent,
    ViewflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
