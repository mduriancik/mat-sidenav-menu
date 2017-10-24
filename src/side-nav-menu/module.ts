import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatRippleModule, MatToolbarModule } from '@angular/material';

import { SideNavMenuComponent } from './menu';
import { SideNavItemComponent } from './item';
import { SideNavGroupComponent } from './group';
import { SideNavExpansionGroupComponent } from './expansion-group';


@NgModule({
  declarations: [
    SideNavExpansionGroupComponent, SideNavGroupComponent, SideNavMenuComponent, SideNavItemComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatExpansionModule, MatIconModule, MatToolbarModule, MatRippleModule
  ],
  exports: [
    MatExpansionModule,
    SideNavExpansionGroupComponent, SideNavGroupComponent, SideNavItemComponent, SideNavMenuComponent
  ]
})
export class SideNavMenuModule {}
