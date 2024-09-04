import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { NavbarComponent } from './Components/navbar/navbar/navbar.component';
import { ListEmpComponent } from './Components/list-emp/list-emp/list-emp.component';
import { AjoutEmpComponent } from './Components/AjoutEmp/ajout-emp/ajout-emp.component';
import { DemandeComponent } from './Components/Demande/demande/demande.component';
import { LoginComponent } from './Components/login/login.component';
import { EmployeProfileComponent } from './Components/emp-profil/emp-profil.component';
import { SidebarComponent } from './Components/sidebar/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemandesComponent } from './Components/demandes/demandes.component';
import { HomeEmpComponent } from './Components/home-emp/home-emp.component';

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
    SidebarComponent,
    DemandesComponent,
    HomeEmpComponent
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
