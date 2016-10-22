import { RagePage } from './app.po';

describe('rage App', function() {
  let page: RagePage;

  beforeEach(() => {
    page = new RagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
