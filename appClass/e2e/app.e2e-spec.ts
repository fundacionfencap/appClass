import { AppClassPage } from './app.po';

describe('app-class App', () => {
  let page: AppClassPage;

  beforeEach(() => {
    page = new AppClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
