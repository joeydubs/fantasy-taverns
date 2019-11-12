import { Component, OnInit } from '@angular/core';
import { TavernService, ITavern, IRoom } from '../tavern.service';

@Component({
  selector: 'app-my-taverns',
  templateUrl: './my-taverns.component.html',
})

export class MyTavernsComponent implements OnInit {
  tavernRooms: IRoom[];

  constructor(private tavernService: TavernService) { }

  ngOnInit() {
    this.tavernService.getTavernRooms().subscribe(
      (response) => {
        console.log(response);
        this.tavernRooms = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
