import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTavernsComponent } from './my-taverns/my-taverns.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TavernsRoutingModule } from './taverns-routing.module';



@NgModule({
  declarations: [MyTavernsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TavernsRoutingModule,
  ]
})
export class TavernsModule { }
