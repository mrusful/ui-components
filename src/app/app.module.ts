import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';

import { SidenavLayoutModule } from './sidenav-layout';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SidenavLayoutModule,
    MdButtonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
