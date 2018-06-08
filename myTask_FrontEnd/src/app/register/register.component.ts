import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  private firstName: string = '';
  private lastName: string = '';
  private email: string = '';
  private password: string = '';
  private showEmailExists: boolean = false;
  private confirmPassword: string = '';
  private showPassNotMatch: boolean = false;
  // private showNotEmail: boolean = false;
  not: number;
  notifications;

  constructor(public dataService: DataService,private toastr: ToastrService) {
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser'))
      return true;
    return false;
  }

  onLogout() {
    localStorage.clear();
    this.toastr.info("You have logged out!");
  }



  ngOnInit() { }


  onFirstName(event: any) {
    this.firstName = event.target.value;
  }

  onLastName(event: any) {
    this.lastName = event.target.value;
  }
  onEmail(event: any) {
    this.email = event.target.value;
    // this.checkEmail();
    // this.dataService.checkEmail(this.email).subscribe(users => {
    //   var response: string = users.text();
    //   if (response === 'Email already exists') {
    //     this.showEmailExists = true;
    //   }
    //   else {
    //     this.showEmailExists = false;
    //   }
    // });
  }
  onPassword(event: any) {
    this.password = event.target.value;
    this.showPassNotMatch = this.password !== this.confirmPassword;
  }
  onConfirmPassword(event: any) {
    this.confirmPassword = event.target.value;
    this.showPassNotMatch = this.password !== this.confirmPassword;
  }
  postProfile() {
    if (this.firstName !== '' && this.lastName !== '' && this.email !== '' && this.password !== '' && this.password == this.confirmPassword && !this.showEmailExists) {
      this.dataService.postUser(this.firstName, this.lastName, this.email, this.password, this.confirmPassword).subscribe((res: any) => {
        if (res.status == 201) {
          this.toastr.success('Registration successful, you can now login to your account.');
          window.location.href = "#/login";
        }
        else {
          this.toastr.error('Something is wrong, please try to register with another email!');
          window.location.href = "#/register";
        }
      });
    }
  }
}
