import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavMenuModule } from '../side-nav-menu/side-nav-menu.module';
import { TestPage1Component, TestPage2Component, TestPage3Component } from './test-pages/test-pages.component';

@NgModule({
  declarations: [
    AppComponent, TestPage1Component, TestPage2Component, TestPage3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule, MdSidenavModule,
    SideNavMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
