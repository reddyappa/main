import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FileUploadModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
