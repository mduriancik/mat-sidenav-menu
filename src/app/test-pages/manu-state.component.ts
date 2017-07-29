import { Component } from '@angular/core';
import { StateService } from '../state-service';

@Component({
  selector: 'app-state-page1',
  template: `
    <h3>SideNav Menu State</h3>
    <div>
      <section>
        <md-checkbox [(ngModel)]="state.disabled['page1']">Page 1 disabled</md-checkbox>
      </section>
      <section>
        <md-checkbox [(ngModel)]="state.disabled['page2']">Page 2 disabled</md-checkbox>
      </section>
      <section>
        <md-checkbox [(ngModel)]="state.disabled['page3']">Page 3 disabled</md-checkbox>
      </section>
    </div>`
})
export class MenuStateComponent {

  constructor(public state: StateService) {
   }

}
