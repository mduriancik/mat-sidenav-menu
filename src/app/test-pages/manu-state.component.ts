import { Component } from '@angular/core';
import { StateService } from '../state-service';

@Component({
  selector: 'app-state-page1',
  template: `
    <h3>SideNav Menu State</h3>
    <div>
      <section>
        <mat-checkbox [(ngModel)]="state.disabled['page1']">Page 1 disabled</mat-checkbox>
      </section>
      <section>
        <mat-checkbox [(ngModel)]="state.disabled['page2']">Page 2 disabled</mat-checkbox>
      </section>
      <section>
        <mat-checkbox [(ngModel)]="state.disabled['page3']">Page 3 disabled</mat-checkbox>
      </section>
    </div>`
})
export class MenuStateComponent {

  constructor(public state: StateService) {
   }

}
