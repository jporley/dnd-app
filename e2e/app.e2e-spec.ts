import { DndAppPage } from './app.po';

describe('dnd-app App', () => {
  let page: DndAppPage;

  beforeEach(() => {
    page = new DndAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
