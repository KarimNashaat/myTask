import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  
  attachmentList:any = [];
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.fileService.getAllFiles().subscribe( (res: any) => {
      console.log(res);
      this.attachmentList = res.data;}
      )
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser'))
      return true;
    return false;
  }
  onLogout() {
    localStorage.clear();
  }
  download(fileID,fileName){

    this.fileService.downloadFile(fileID,fileName)
    .subscribe(
        data => saveAs(data,fileName+".csv"),
        error => console.error(error)
    );
  }
}
