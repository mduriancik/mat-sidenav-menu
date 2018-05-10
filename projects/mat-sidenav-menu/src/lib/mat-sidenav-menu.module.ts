import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatRippleModule, MatToolbarModule } from '@angular/material';

import { MatSidenavMenuComponent } from './mat-sidenav-menu.component';
import { SideNavItemComponent } from './item';
import { SideNavGroupComponent } from './group';
import { SideNavExpansionGroupComponent } from './expansion-group';


@NgModule({
  declarations: [
    SideNavExpansionGroupComponent, SideNavGroupComponent, MatSidenavMenuComponent, SideNavItemComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatExpansionModule, MatIconModule, MatToolbarModule, MatRippleModule
  ],
  exports: [
    MatExpansionModule,
    SideNavExpansionGroupComponent, SideNavGroupComponent, SideNavItemComponent, MatSidenavMenuComponent
  ]
})
export class MatSidenavMenuModule {}
