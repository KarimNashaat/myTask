import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    postUser(fn: string, ln: string, em: string, pass: string, cPass: string) {
        return this.http.post(environment.apiUrl + 'auth/register', { FirstName: fn, LastName: ln, email: em, password: pass, confirmPassword: cPass });
    }

    checkEmail(em: string) {
        return this.http.post(environment.apiUrl + 'checkEmail', { email: em });
    }

}