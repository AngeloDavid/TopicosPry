import { PryTopicosPage } from './app.po';

describe('pry-topicos App', () => {
  let page: PryTopicosPage;

  beforeEach(() => {
    page = new PryTopicosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
