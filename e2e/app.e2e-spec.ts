import { FanligappPage } from './app.po';

describe('fanligapp App', () => {
  let page: FanligappPage;

  beforeEach(() => {
    page = new FanligappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
