import {bootstrap} from 'angular2/platform/browser';
import {Angularfire2ProjectApp} from './app/angularfire2-project';
import {enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';

// enableProdMode();

bootstrap(Angularfire2ProjectApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://popping-fire-9851.firebaseio.com/'),
  ROUTER_PROVIDERS,
  firebaseAuthConfig({
    provider: AuthProviders.Twitter,
    method: AuthMethods.Popup,
    remember: 'default',
    scope: ['email']
  })
]);
