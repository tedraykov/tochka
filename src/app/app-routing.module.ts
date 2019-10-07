import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointComponent } from './point/point.component';


const routes: Routes = [
  { path: '', component: PointComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
