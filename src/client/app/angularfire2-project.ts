import {Component, Inject} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {Messages} from './messages/messages';
import {FormMessage} from './form-message/form-message';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'angularfire2-project-app',
  templateUrl: 'app/angularfire2-project.html',
  styleUrls: ['app/angularfire2-project.css'],
  directives: [Messages, FormMessage]
})
export class Angularfire2ProjectApp {
  
  username: string;
  profileImageURL : string;
  socialNetwork: string;
  
  constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth) {
    if (this.auth.getAuth() !== null && this.auth.getAuth().twitter) {
      this.username = this.auth.getAuth().twitter.username;
      this.profileImageURL = this.auth.getAuth().twitter.profileImageURL;
      this.socialNetwork = 'Twitter';
    }
    if (this.auth.getAuth() !== null && this.auth.getAuth().facebook) {
      this.username = this.auth.getAuth().facebook.displayName;
      this.profileImageURL = this.auth.getAuth().facebook.profileImageURL;
      this.socialNetwork = 'Facebook';
    }
  }
  
  loginTwitter() {
    this.auth.login().then(result => {
      this.username = result.twitter.username;
      this.profileImageURL = result.twitter.profileImageURL;
      this.socialNetwork = 'Twitter';
    });
  }
  
  loginFB() {
    this.auth.login({provider: AuthProviders.Facebook}).then(result => {
      this.username = result.facebook.displayName;
      this.profileImageURL = result.facebook.profileImageURL;
      this.socialNetwork = 'Facebook';
    });
  }
  
  logout() {
    this.auth.logout();
  }
  
}
