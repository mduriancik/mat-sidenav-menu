import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterStateSnapshot } from '@angular/router';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'side-nav-group',
  template:
    `<div style="border-width:1px 0px 1px 0px;border-style:solid;border-color:#e0e0e0">
        <div *ngIf="title"
          style="background:rgba(0,0,0,.32);color:hsla(0,0%,100%,.87);width:100%">
          <span style="padding: 0 16px;">{{title}}</span>
        </div>
        <ng-content></ng-content>
    </div>`,
  styles: []
})
export class SideNavGroupComponent {
  @Input('title') title: string;

}
