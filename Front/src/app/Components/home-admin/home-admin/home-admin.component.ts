import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

  constructor(private router: Router) {}
  
  goToDemande(): void {
    this.router.navigate(['/home/demande']);
  }

}
