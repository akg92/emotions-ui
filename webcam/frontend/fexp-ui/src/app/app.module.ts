import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RendererFactory2 } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { MatchComponent } from './match/match.component';
import {WebcamModule} from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './select/select.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    MatchComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
