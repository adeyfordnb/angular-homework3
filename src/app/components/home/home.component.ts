import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onNewMessage(message){
    this.newMessage = message;
    console.log(message);
  }

}
