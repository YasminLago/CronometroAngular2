import { CronometroPage } from './app.po';

describe('cronometro App', function() {
  let page: CronometroPage;

  beforeEach(() => {
    page = new CronometroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
