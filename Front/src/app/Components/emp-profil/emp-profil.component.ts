import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from '../../Models/Employe.interface';
import { EmployeService } from '../../Services/employe.service';

@Component({
  selector: 'app-employe-profile',
  templateUrl: './emp-profil.component.html',
  styleUrls: ['./emp-profil.component.css']
})
export class EmployeProfileComponent implements OnInit {
  employe: Employe | undefined;

  constructor(
    private employeService: EmployeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
  
    if (id) {
      // Fetch the employee data if the id is present
      this.employeService.getEmployeById(id).subscribe(
        (data: Employe) => {
          this.employe = data;
        },
        (err) => {
          console.error('Error fetching employee data', err);
        }
      );
    } else {
      // Set some default data or just a message for testing
      this.employe = {
       } as Employe;
    }
  }
  
}
