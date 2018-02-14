import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterStateSnapshot } from '@angular/router';
import { MatSidenav } from '@angular/material';

import { SideNavItemComponent } from './item';

@Component({
    selector: 'side-nav-menu',
    template: `
      <nav style="height:100%">
        <mat-toolbar color="primary">
          <button mat-icon-button (click)="sidenav.close()"><mat-icon>keyboard_arrow_left</mat-icon></button>&nbsp;
          <span>{{ title }}</span>
        </mat-toolbar>

        <ul class="side-nav-menu">
          <ng-content></ng-content>
        </ul>
      </nav>`,
    styles: [
      `.side-nav-menu{
          list-style-type: none;
          padding: 0
      }`]
  })
  export class SideNavMenuComponent {

    @Input() sidenav: MatSidenav;
    @Input() title: '';
    @ContentChildren(SideNavItemComponent, {descendants: true}) items: QueryList<SideNavItemComponent>;
    active: SideNavItemComponent;

    constructor(private router: Router, private aroute: ActivatedRoute) {
      // console.log('router:', this.router);
      this.router.events.subscribe( e => {
        // console.log('url:', this.router.url);
        // console.log('router state:', this.router.routerState);
        // if (this.router.routerState.root.children.length > 0 ) {
        if (e instanceof NavigationEnd) {
          // console.log('component:', '(' + Date.now + ')' + this.router.routerState.root.children[0].component);
          // console.log('path: ' + this.getPath());
          this.items.forEach( i => {
            i.activatePath(this.getPath());
          });
          this.sidenav.close();
        }
        // console.log('path:', this.erouterState);
      });
      // this.aroute.url.subscribe( (u) => {
      //   console.log('active route:', u);
      // });
    }

    private getPath() {
      const path = this.router.routerState.snapshot.url;
      return path;
    }

  }
