import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TestPage1Component, TestPage2Component, TestPage3Component } from './test-pages/test-pages.component';
import { MenuStateComponent } from './test-pages/manu-state.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full',
  },
  {
    path: 'state',
    component: MenuStateComponent
  },
  {
    path: 'page1',
    component: TestPage1Component
  },
  {
    path: 'page2',
    component: TestPage2Component
  },
  {
    path: 'page3',
    component: TestPage3Component
  },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, { useHash: true } ),
  ],
  providers: [  ],
  declarations: [ ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
