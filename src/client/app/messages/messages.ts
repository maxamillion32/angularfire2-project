import {Component} from 'angular2/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {Message} from './../message/message';

@Component({
  selector: 'messages',
  templateUrl: 'app/messages/messages.html',
  styleUrls: ['app/messages/messages.css'],
  directives: [Message]
})
export class Messages {

  messages: Observable<any[]>;
  
  constructor(af: AngularFire) {
    this.messages = af.database.list('/messages');;
  }

}
