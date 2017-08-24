import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdIconModule, MdRippleModule, MdToolbarModule } from '@angular/material';

import { SideNavGroupComponent, SideNavItemComponent, SideNavMenuComponent } from './side-nav-menu.component';


@NgModule({
  declarations: [
    SideNavGroupComponent, SideNavMenuComponent, SideNavItemComponent,
  ],
  imports: [
    BrowserModule,
    MdButtonModule, MdIconModule, MdToolbarModule, MdRippleModule
  ],
  exports: [
    SideNavGroupComponent, SideNavItemComponent, SideNavMenuComponent
  ]
})
export class SideNavMenuModule {}
