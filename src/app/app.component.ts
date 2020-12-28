import { Component } from '@angular/core';
import arrayWords from "../assets/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to Word Generator App';
  word = '';
  limit:number = 10;

  handleSlideChange(newValue:number){
    this.limit = newValue;
  }

  generate(){
    this.word = arrayWords.slice(0 ,this.limit).join(" ");
  }
  generateRandom(){
    let num = Math.floor((Math.random() * 50) + 1);
    this.word = arrayWords[num];
  }
}
