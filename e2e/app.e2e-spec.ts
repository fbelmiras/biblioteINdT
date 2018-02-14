import { BibliotecaIndtPage } from './app.po';

describe('biblioteca-indt App', function() {
  let page: BibliotecaIndtPage;

  beforeEach(() => {
    page = new BibliotecaIndtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
