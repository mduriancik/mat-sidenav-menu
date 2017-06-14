import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavMenuComponent, SideNavItemComponent } from './side-nav-menu/side-nav-menu.component';
import { TestPage1Component, TestPage2Component, TestPage3Component } from './test-pages/test-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavMenuComponent, SideNavItemComponent,
    TestPage1Component, TestPage2Component, TestPage3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule, MdSidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
