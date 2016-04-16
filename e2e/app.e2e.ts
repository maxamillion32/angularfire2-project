import { Angularfire2ProjectPage } from './app.po';

describe('angularfire2-project App', function() {
  let page: Angularfire2ProjectPage;

  beforeEach(() => {
    page = new Angularfire2ProjectPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularfire2-project Works!');
  });
});
