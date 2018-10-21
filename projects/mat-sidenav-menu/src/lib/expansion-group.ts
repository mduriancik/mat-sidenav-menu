import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterStateSnapshot } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'side-nav-x-group',
  template:
    `<mat-expansion-panel [hideToggle]="hideToggle">
        <mat-expansion-panel-header *ngIf="title">{{ title }}</mat-expansion-panel-header>
        <ng-content></ng-content>
    </mat-expansion-panel>`,
  styles: [`
    div.mat-expansion-panel-body {
      padding-right: 0px;
      padding-left: 0px;
    }
  `]
})
export class SideNavExpansionGroupComponent {
  @Input() title: string;
  @Input() hideToggle: string;

}
