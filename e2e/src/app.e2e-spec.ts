import { MatSidenavMenuPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('mat-sidenav-menu App', () => {
  let page: MatSidenavMenuPage;

  beforeEach(() => {
    page = new MatSidenavMenuPage();
  });

  it('menu title', () => {
    page.navigateTo();
    page.clickMenuButton();
    expect(page.getMenuTitle()).toEqual('Demo Menu');
  });

  it('nav-item action', () => {
    page.navigateTo();
    page.clickMenuButton();
    element.all(by.css('side-nav-item a')).get(0).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/#/state');
  });

  it('nav-item active', () => {
    page.navigateTo();
    page.clickMenuButton();
    element.all(by.css('side-nav-item a')).get(1).click();
    // page.clickMenuButton(); // -> menu dont close if a click on an active item (bug? or not?)
    const itemText = element(by.css('.side-nav-item-active span')).getText();
    expect(itemText).toBe('Page 1');
  });
});
