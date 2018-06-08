import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()

export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router,private toastr: ToastrService) { }

  login(input: any) {
    return this.httpClient.post(environment.apiUrl + 'auth/login', input, { headers: { 'Content-Type': 'application/json' } });
  }
}