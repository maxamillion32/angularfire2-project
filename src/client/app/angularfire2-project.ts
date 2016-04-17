import {Component, Inject} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {Messages} from './messages/messages';
import {FormMessage} from './form-message/form-message';

@Component({
  selector: 'angularfire2-project-app',
  templateUrl: 'app/angularfire2-project.html',
  directives: [Messages, FormMessage]
})
export class Angularfire2ProjectApp {
  
  username: string;
  
  constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth) {
    if (this.auth.getAuth() !== null) {
      this.username = this.auth.getAuth().twitter.username;
    }
  }
  
  login () {
    this.auth.login().then(result => {
      this.username = result.twitter.username;
    });
  }
  
  logout() {
    this.auth.logout();
  }
  
}
