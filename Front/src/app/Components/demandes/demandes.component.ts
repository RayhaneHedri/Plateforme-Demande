import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrl: './demandes.component.css'
})
export class DemandesComponent {
  constructor(private router: Router) {}
  
  goToDemande(): void {
    this.router.navigate(['/home/demande']);
  }
}
