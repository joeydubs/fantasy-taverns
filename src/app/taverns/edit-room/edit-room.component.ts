import { Component, OnInit } from '@angular/core';
import { TavernService, IRoom } from '../tavern.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-taverns',
  templateUrl: './edit-room.component.html',
})

export class EditRoomComponent implements OnInit {
  roomID: number;
  room: IRoom;

  constructor(private tavernService: TavernService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params)
      this.roomID = params.id
    })
  }

  ngOnInit() {
    if (this.roomID === 0) {
      this.tavernService.getTavernRoom(this.roomID).subscribe(
        (response) => {
          console.log(response);
          this.room = response;
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
}
