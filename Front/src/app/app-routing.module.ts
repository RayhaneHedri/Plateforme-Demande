import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './Components/Demande/demande/demande.component';
import { EmployeProfileComponent } from './Components/emp-profil/emp-profil.component';
import { ListEmpComponent } from './Components/list-emp/list-emp/list-emp.component';
import { AjoutEmpComponent } from './Components/AjoutEmp/ajout-emp/ajout-emp.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { DemandesComponent } from './Components/demandes/demandes.component';
import { HomeEmpComponent } from './Components/home-emp/home-emp.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dash',
    children: [
      { path: '', component: HomeAdminComponent },
      { path: 'demande', component: DemandeComponent },
      { path: 'demandes', component: DemandesComponent },
      { path: 'liste', component: ListEmpComponent },
      { path: 'profile', component: EmployeProfileComponent },
      {
        path: 'employes',
        children: [
          { path: '', component: ListEmpComponent },
          { path: 'ajoutEmp', component: AjoutEmpComponent },
        ],
      },
    ],
  },

  {
    path: 'home',
    children: [
      { path: '', component: HomeEmpComponent },
      
    ],
  },

  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
