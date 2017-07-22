import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdIconModule, MdRippleModule, MdToolbarModule } from '@angular/material';

import { SideNavItemComponent, SideNavMenuComponent } from './side-nav-menu.component';


@NgModule({
  declarations: [
    SideNavMenuComponent, SideNavItemComponent,
  ],
  imports: [
    BrowserModule,
    MdButtonModule, MdIconModule, MdToolbarModule, MdRippleModule
  ],
  exports: [
    SideNavItemComponent, SideNavMenuComponent
  ]
})
export class SideNavMenuModule {}
