import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  emailadd = "";
  pass = "";
  public input = {
    email: '',
    password: ''
  };
  not: number;
  notifications;


  constructor(private loginService: LoginService,private toastr: ToastrService) { }

  isLoggedIn() {
    if (localStorage.getItem('currentUser'))
      return true;
    return false;
  }

  onLogout() {
    localStorage.clear();
    this.toastr.info("You have logged out!");
  }

  ngOnInit() {
   
  }

  onUpdateEmail(event: any) {
    this.emailadd = (<HTMLInputElement>event.target).value;
  }

  onUpdatePass(event: any) {
    this.pass = (<HTMLInputElement>event.target).value;
  }

  onLogin() {
    this.input.email = this.emailadd;
    this.input.password = this.pass;
    this.loginService.login(this.input).subscribe((res: any) => {
      if (this.isLoggedIn()) {
        this.toastr.warning("You are already logged in!");
        window.location.href = "#/home";
      }
      else {
        var tokendata = res["data"];
        localStorage.setItem('currentUser', tokendata);
        this.toastr.success(res["msg"]);
        localStorage.setItem('userEmail',this.input.email);
        window.location.href = "#/home";
      }
    }, error => {
      this.toastr.error(error.error.msg);
      window.location.href = "#/login";
    }
    );
  }
}