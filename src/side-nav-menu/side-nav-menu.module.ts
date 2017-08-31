import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdRippleModule, MdToolbarModule } from '@angular/material';

import { SideNavGroupComponent, SideNavItemComponent, SideNavMenuComponent } from './side-nav-menu.component';


@NgModule({
  declarations: [
    SideNavGroupComponent, SideNavMenuComponent, SideNavItemComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MdButtonModule, MdIconModule, MdToolbarModule, MdRippleModule
  ],
  exports: [
    SideNavGroupComponent, SideNavItemComponent, SideNavMenuComponent
  ]
})
export class SideNavMenuModule {}
