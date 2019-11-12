import { Component, OnInit } from '@angular/core';
import { TavernService, IRoom, IGuest } from '../tavern.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-taverns',
  templateUrl: './book-stay.component.html',
})

export class BookStayComponent implements OnInit {
  tavernRooms: IRoom[];
  tavernGuests: IGuest[];
  bookStayForm: FormGroup = new FormGroup({
    guestID: new FormControl(''),
    startDate: new FormControl(''),
    roomID: new FormControl(''),
  });
  
  constructor(private tavernService: TavernService) {
    this.tavernService.getTavernGuests().subscribe(
      (response) => {
        this.tavernGuests = response;
        console.log(this.tavernGuests);
      }
    )

    this.tavernService.getTavernRooms().subscribe(
      (response) => {
        this.tavernRooms = response
        console.log(this.tavernRooms)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit() {

  }
}
