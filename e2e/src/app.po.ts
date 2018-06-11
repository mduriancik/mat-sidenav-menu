import { browser, by, element } from 'protractor';

export class MatSidenavMenuPage {

  navigateTo() {
    return browser.get('/');
  }

  clickMenuButton() {
    return element(by.css('mat-sidenav-content button')).click();
  }

  getMenuTitle() {
    return element(by.css('mat-sidenav-container > mat-sidenav > side-nav-menu > nav > mat-toolbar > span')).getText();
  }
}
