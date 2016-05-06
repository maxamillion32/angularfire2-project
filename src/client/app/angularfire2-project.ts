import {Component, Inject} from 'angular2/core';
import {StravaComponent} from './strava-component/strava-component';
import {ChatComponent} from './chat-component/chat-component';
import {ROUTER_DIRECTIVES}      from 'angular2/router';
import {RouteConfig}            from 'angular2/router';

@Component({
  selector: 'angularfire2-project-app',
  templateUrl: 'app/angularfire2-project.html',
  styleUrls: ['app/angularfire2-project.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/chat',   name: 'Chat',   component: ChatComponent,  useAsDefault: true},
    {path:'/strava', name: 'Strava', component: StravaComponent                   }
])
export class Angularfire2ProjectApp {
  
  constructor() {}
  
}
