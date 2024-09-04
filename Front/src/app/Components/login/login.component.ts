import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  employe = {
    login: '',
    pw: ''
  }

  constructor(private _login: LoginService, private router: Router) {}

  ngOnInit(): void {
      
  }

  token: any;
  login(){
    
    this._login.login(this.employe)
    .subscribe(
      res => {

        this.token = res;
        localStorage.setItem('token', this.token.myToken);
        //console.log("i'm here");


        this.router.navigate(['/home/profile']);
      }
    )
  }

}
