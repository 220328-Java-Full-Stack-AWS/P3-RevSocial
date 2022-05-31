import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
// Icons
import { faFaceRollingEyes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  public TEMPLogIn(){
    this.auth.login();
  }

  // Front End Work
  public faFaceRollingEyes = faFaceRollingEyes; //icon

  // Show Password
  public showPassword = false;
  public toggleShowPassword(){
    this.showPassword = !this.showPassword;
  }

}
