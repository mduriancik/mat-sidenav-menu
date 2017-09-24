import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavMenuModule } from '../side-nav-menu/module';
import { TestPage1Component, TestPage2Component, TestPage3Component, TestPageComponent } from './test-pages/test-pages.component';
import { MenuStateComponent } from './test-pages/manu-state.component';
import { StateService } from './state-service';

@NgModule({
  declarations: [
    AppComponent, TestPage1Component, TestPage2Component, TestPage3Component, TestPageComponent, MenuStateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    MdButtonModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule,
    SideNavMenuModule,
    AppRoutingModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
