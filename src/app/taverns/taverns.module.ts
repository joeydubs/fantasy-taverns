import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTavernsComponent } from './my-taverns/my-taverns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TavernsRoutingModule } from './taverns-routing.module';
import { MyTavernsHeaderComponent } from './my-taverns-header/my-taverns-header.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { BookStayComponent } from './book-stay/book-stay.component';



@NgModule({
  declarations: [MyTavernsHeaderComponent, MyTavernsComponent, EditRoomComponent, BookStayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    TavernsRoutingModule,
  ]
})
export class TavernsModule { }
