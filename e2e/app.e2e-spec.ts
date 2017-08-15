import { CareplanPage } from './app.po';

describe('careplan App', () => {
  let page: CareplanPage;

  beforeEach(() => {
    page = new CareplanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
