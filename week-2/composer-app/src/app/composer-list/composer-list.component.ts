import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;
  // keywords = ['Typescript', '#2020', '#CodingWithAngular', '#ngOmaha'];
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite Food: ${this.genre}`
    );
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  myComposer: Composer;
  constructor() {
    this.myComposer = new Composer('Juan Luis Guerra', 'Latin Pop');
    this.myComposer.toString();
  }

  ngOnInit(): void {}
}
