import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin/home-admin.component';
import { NavbarComponent } from './Components/home-admin/navbar/navbar/navbar.component';
import { ListEmpComponent } from './Components/home-admin/list-emp/list-emp/list-emp.component';
import { AjoutEmpComponent } from './Components/home-admin/AjoutEmp/ajout-emp/ajout-emp.component';
import { DemandeComponent } from './Components/home-admin/Demande/demande/demande.component';
import { LoginComponent } from './Components/home-admin/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeProfileComponent } from './Components/home-admin/emp-profil/emp-profil.component';
import { SidebarComponent } from './Components/home-admin/sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    NavbarComponent,
    ListEmpComponent,
    AjoutEmpComponent,
    DemandeComponent,
    LoginComponent,
    EmployeProfileComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
