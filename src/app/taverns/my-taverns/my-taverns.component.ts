import { Component, OnInit } from '@angular/core';
import { TavernService } from '../tavern.service';

@Component({
  selector: 'app-my-taverns',
  templateUrl: './my-taverns.component.html',
})
export class MyTavernsComponent implements OnInit {

  constructor(private tavernService: TavernService) { }

  ngOnInit() {
  }

}
