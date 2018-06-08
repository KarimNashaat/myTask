import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../file.service';
import {saveAs} from 'file-saver';
const uri = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']

})

export class HomepageComponent implements OnInit {

  fileToUpload: File = null;
  
  uploader:FileUploader = new FileUploader({url:uri, authToken:  localStorage.getItem('currentUser')} );

  attachmentList:any = [];

  constructor(private _fileService:FileService,private toastr: ToastrService){
      this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {

          this.attachmentList.push(JSON.parse(response).data);
              
        }
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

  ngOnInit() {

  }
  register() {
    window.location.href = "#/register";
  }


download(fileID,fileName){

  this._fileService.downloadFile(fileID,fileName)
  .subscribe(
      data => saveAs(data,fileName+".csv"),
      error => console.error(error)
  );
}

}