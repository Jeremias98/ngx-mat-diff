import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMatDiffModule } from 'projects/ngx-mat-diff/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMatDiffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
