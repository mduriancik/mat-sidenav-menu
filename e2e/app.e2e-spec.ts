import { MatSidenavMenuPage } from './app.po';

describe('mat-sidenav-menu App', () => {
  let page: MatSidenavMenuPage;

  beforeEach(() => {
    page = new MatSidenavMenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
