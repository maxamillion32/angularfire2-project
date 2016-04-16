export class Angularfire2ProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularfire2-project-app p')).getText();
  }
}
