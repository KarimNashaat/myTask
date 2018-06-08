import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()

export class FileService {

    constructor(private _http:HttpClient){}

    downloadFile(fileID:String,fn:any){
        var body = {
            fileName : fn,
            ID : fileID,
        }
        return this._http.post('http://localhost:3000/api/download',body,{
            responseType : 'blob',
            headers:new HttpHeaders({'Content-Type':'application/json','authorization': localStorage.getItem('currentUser')})
        });
    }
    getAllFiles() {
        return this._http.get(environment.apiUrl +'file/getAllFiles',  { headers: { 'Content-Type': 'application/json' ,'authorization': localStorage.getItem('currentUser')} });
      }
}