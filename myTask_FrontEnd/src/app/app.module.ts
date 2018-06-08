import { APP_BASE_HREF } from '@angular/common';
import { NgbModule, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login/login.service';
import { ToastrModule } from 'ngx-toastr';
import { DataService } from './register/data.service';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileService } from './file.service';
import { AboutComponent } from './about/about.component';
import { DownloadsComponent } from './downloads/downloads.component';
@NgModule({
  declarations: [
    AppComponent,HomepageComponent,
    LoginComponent,RegisterComponent,FileSelectDirective, AboutComponent, DownloadsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },LoginService,DataService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
