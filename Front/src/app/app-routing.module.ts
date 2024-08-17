import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpComponent } from './Components/home-admin/list-emp/list-emp/list-emp.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin/home-admin.component';
import { AjoutEmpComponent } from './Components/home-admin/AjoutEmp/ajout-emp/ajout-emp.component';
import { DemandeComponent } from './Components/home-admin/Demande/demande/demande.component';
import { LoginComponent } from './Components/home-admin/login/login.component';
import { EmployeProfileComponent } from './Components/home-admin/emp-profil/emp-profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home',
  children: [
    {path:'' , component: HomeAdminComponent},
    {path:'demande' , component: DemandeComponent},
    {path:'profile', component: EmployeProfileComponent},
    {path:'employes',
  children: [
    {path: '', component: ListEmpComponent},
    {path:'ajoutEmp',component: AjoutEmpComponent }

  ]}
  ]

},

{ path: 'login', component: LoginComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
