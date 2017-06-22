import { UiComponentsPage } from './app.po';

describe('ui-components App', () => {
  let page: UiComponentsPage;

  beforeEach(() => {
    page = new UiComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
