import { MatSidenavMenuPage } from './app.po';
import { browser } from 'protractor';

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
});
