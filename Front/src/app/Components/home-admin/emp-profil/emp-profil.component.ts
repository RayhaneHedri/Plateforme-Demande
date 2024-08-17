import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../../Services/employe.service';
import { Employe } from '../../../Models/Employe.interface';
import { ActivatedRoute } from '@angular/router';

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
    this.employeService.getEmployeById(id).subscribe(
      (data: Employe) => {
        this.employe = data;
      },
      (err) => {
        console.error('Error fetching employee data', err);
      }
    );
  }
}
