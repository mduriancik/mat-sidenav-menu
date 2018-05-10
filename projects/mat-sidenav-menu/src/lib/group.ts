import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'side-nav-group',
  template:
    `<div class="side-nav-group">
        <div *ngIf="title" class="side-nav-group-title">
          <span style="padding: 0 16px;">{{ title }}</span>
        </div>
        <ng-content></ng-content>
    </div>`,
  styles: [`
    .side-nav-group {
      border-width:1px 0px 1px 0px;
      border-style:solid;
    }
    .side-nav-group-title {
      width:100%
    }
  `]
})
export class SideNavGroupComponent {
  @Input('title') title: string;

}
