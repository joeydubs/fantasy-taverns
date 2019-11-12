import { Component, OnInit } from '@angular/core';
import { TavernService, ITavern } from '../tavern.service';

@Component({
  selector: 'app-my-taverns',
  templateUrl: './my-taverns-header.component.html',
})

export class MyTavernsHeaderComponent implements OnInit {
  myTavern: ITavern;

  constructor(private tavernService: TavernService) { }

  ngOnInit() {
    this.tavernService.getMyTaverns().subscribe(
      (response) => {
        console.log(response);
        this.myTavern = response;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
