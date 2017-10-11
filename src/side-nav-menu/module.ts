import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatRippleModule, MatToolbarModule } from '@angular/material';

import { SideNavMenuComponent } from './menu';
import { SideNavItemComponent } from './item';
import { SideNavGroupComponent } from './group';


@NgModule({
  declarations: [
    SideNavGroupComponent, SideNavMenuComponent, SideNavItemComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatRippleModule
  ],
  exports: [
    SideNavGroupComponent, SideNavItemComponent, SideNavMenuComponent
  ]
})
export class SideNavMenuModule {}
