import {Component, Input} from 'angular2/core';

@Component({
  selector: 'message',
  templateUrl: 'app/message/message.html',
  styleUrls: ['app/message/message.css']
})
export class Message {

  @Input() msg: any;
  
  constructor() {}

}
