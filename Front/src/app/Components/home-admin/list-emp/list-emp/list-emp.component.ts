import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent {
  constructor(private router: Router) {}
  
  goToAddEmployee(): void {
    this.router.navigate(['/home/employes/ajoutEmp']);
  }

}
