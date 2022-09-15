import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule, SvgIconComponent } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  exports: [SvgIconComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
