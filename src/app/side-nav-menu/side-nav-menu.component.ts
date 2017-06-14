import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'side-nav-item',
  template: `<li>
                <a class="side-nav-menu-item" md-ripple
                  [ngClass]="{'side-nav-menu-item-active': active}"
                  (click)="navigate()">{{title}}</a>
             </li>`,
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavItemComponent {

  @Input('title') title;
  @Input('route') route;
  @Output('activated') activated = new EventEmitter();
  active: boolean;

  constructor(private router: Router) {
  }

  navigate() {
    this.active = true;
    this.router.navigate([this.route]);
    this.activated.emit(this.route);
  }
}

@Component({
  selector: 'side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements AfterContentInit{

  @Input() sidenav;
  @ContentChildren(SideNavItemComponent) items: QueryList<SideNavItemComponent>;
  active: SideNavItemComponent;

  constructor(private router: Router) {
  }

  ngAfterContentInit() {
    this.items.forEach( c => {
      c.activated.subscribe( r => {
        if (this.active) {
          this.active.active = false;
        } ;
        this.active = c;
      });
    });
  }

  // navigate(route: string) {
  //   this.active = route;
  //   this.router.navigate([route]);
  //   this.sidenav.close();
  // }

}
