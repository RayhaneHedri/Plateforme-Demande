import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../Services/login.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  empData$: Observable<any> = of(null);

  constructor(public _login: LoginService) {}

  ngOnInit() {
    
  }

  

}