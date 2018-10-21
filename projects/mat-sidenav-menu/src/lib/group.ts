import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
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
  styleUrls: [`group.scss`]
})
export class SideNavGroupComponent {
  @Input() title: string;

}
