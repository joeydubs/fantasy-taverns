import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MyTavernsComponent } from './my-taverns/my-taverns.component';
import { AuthGuard } from '../common/auth/auth.guard';

const routes: Routes = [
    { path: 'my-taverns', component: MyTavernsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class TavernsRoutingModule {}
