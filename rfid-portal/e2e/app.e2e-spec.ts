import { RfidPortalPage } from './app.po';

describe('rfid-portal App', () => {
  let page: RfidPortalPage;

  beforeEach(() => {
    page = new RfidPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
