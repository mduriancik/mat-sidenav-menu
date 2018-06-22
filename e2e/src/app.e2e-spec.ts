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

  it('nav-item displayed', async () => {
    page.navigateTo();
    const item0 = element.all(by.css('side-nav-item a')).get(0);
    expect(item0.isDisplayed()).toBe(false);
    await page.clickMenuButton();
    expect(item0.isDisplayed()).toBe(true);
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
    expect(page.getActiveItemText()).toBe('Page 1');
  });

  it('nav-item disabled', () => {
    page.navigateTo();
    page.clickMenuButton();
    expect(page.getDisabledItemText()).toEqual('Page 2');
  });


  it('nav-item activated by router', () => {
    page.navigateTo('/#/page3');
    page.clickMenuButton();
    expect(page.getActiveItemText()).toEqual('Page 3');
  });

  it('nav-item expanded', () => {
    page.navigateTo();
    page.clickMenuButton();
    const submenu5 = element(by.cssContainingText('.mat-content', 'submenu 5'));
    const expPnl = element.all(by.css('.mat-expansion-panel-content')).get(0);
    expect(expPnl.isDisplayed()).toBeFalsy();
    submenu5.click();
    expect(expPnl.isDisplayed()).toBeTruthy();
  });

});
