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

@Component({
  selector: 'side-nav-item',
  template: `<li>
                <a class="side-nav-menu-item" md-ripple
                  [ngClass]="{'side-nav-menu-item-active': active,'side-nav-menu-item-disabled': disabled}"
                  (click)="navigate()">
                      <md-icon *ngIf="icon" style="margin-right:10px;vertical-align:middle">{{icon}}</md-icon>
                      <span style="vertical-align:middle">{{title}}</span>
                </a>
             </li>`,
  styles: [
    `.side-nav-menu-item {
        list-style-type: none;
        box-sizing: border-box;
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 47px;
        text-decoration: none;
        transition: all .3s;
        padding: 0 16px;
        position: relative;
        cursor: pointer;
      }
      .side-nav-menu-item-active {
        background: #ddd
      }
      .side-nav-menu-item-disabled {
        color: #aaa
      }
      .side-nav-menu-item:hover {
        background: #f0f0f0;
      }`]
})
export class SideNavItemComponent {

  @Input('title') title: string;
  @Input('icon')  icon: string;
  @Input('route') route: string;
  @Input('disabled') disabled: boolean;
  active: boolean;

  constructor(private router: Router) {
  }

  navigate() {
    if (!this.disabled) {
      this.router.navigate([this.route]);
    }
  }

  activatePath(path: string) {
    if (path === this.route) {
      this.active = true;
    } else {
      this.active = false;
    }
  }
}

@Component({
  selector: 'side-nav-menu',
  template: `
    <nav style="height:100%">
      <md-toolbar color="primary">
        <button md-icon-button (click)="sidenav.close()"><md-icon>keyboard_arrow_left</md-icon></button>&nbsp;
        <span>Side menu</span>
      </md-toolbar>

      <ul style="list-style-type: none; padding: 0">
        <ng-content></ng-content>
      </ul>
    </nav>`
})
export class SideNavMenuComponent {

  @Input() sidenav: MdSidenav;
  @ContentChildren(SideNavItemComponent) items: QueryList<SideNavItemComponent>;
  active: SideNavItemComponent;

  constructor(private router: Router, private aroute: ActivatedRoute) {
    console.log('router:', this.router);
    this.router.events.subscribe( e => {
      // console.log('url:', this.router.url);
      // console.log('router state:', this.router.routerState);
      // if (this.router.routerState.root.children.length > 0 ) {
      if (e instanceof NavigationEnd) {
        // console.log('component:', '(' + Date.now + ')' + this.router.routerState.root.children[0].component);
        // console.log('path: ' + this.getPath());
        this.items.forEach( i => {
          i.activatePath(this.getPath());
        })
        this.sidenav.close();
      }
      // console.log('path:', this.erouterState);
    });
    // this.aroute.url.subscribe( (u) => {
    //   console.log('active route:', u);
    // });
  }

  private getPath() {
    const cmp = this.router.routerState.root.children[0].component;
    let path: string;
    this.router.config.forEach(r => {
      if (r.component === cmp) {
        path = r.path;
      }
    });
    return path;
  }

}
