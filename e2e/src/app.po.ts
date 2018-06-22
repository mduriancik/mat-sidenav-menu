import { browser, by, element } from 'protractor';

export class MatSidenavMenuPage {

  navigateTo(uri = '/') {
    return browser.get(uri);
  }

  clickMenuButton() {
    return element(by.css('mat-sidenav-content button')).click();
  }

  getMenuTitle() {
    return element(by.css('mat-sidenav-container > mat-sidenav > side-nav-menu > nav > mat-toolbar > span')).getText();
  }

  getActiveItemText() {
    const item = element(by.css('.side-nav-item-active span'));
    // getText() must be called 3 times to work correctly!  Protractor or WebDriver is realy buggy?!
    item.getText();
    item.getText();
    return item.getText();
  }

  getDisabledItemText() {
    const disabledItem = element.all(by.css('.side-nav-item-disabled span')).get(0);
    // getText() must be called 3 times to work correctly!  Protractor or WebDriver is realy buggy?!
    disabledItem.getText();
    disabledItem.getText();
    return disabledItem.getText();
  }

}
