import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../common/auth/auth.guard';
import { MyTavernsHeaderComponent } from './my-taverns-header/my-taverns-header.component';
import { MyTavernsComponent } from './my-taverns/my-taverns.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { BookStayComponent } from './book-stay/book-stay.component';

const routes: Routes = [
    {
        path: 'my-taverns', component: MyTavernsHeaderComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'rooms', pathMatch: 'full' },
            { path: 'rooms', component: MyTavernsComponent },
            { path: 'rooms/:roomID', component: EditRoomComponent },
            { path: 'book', component: BookStayComponent }
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class TavernsRoutingModule { }
