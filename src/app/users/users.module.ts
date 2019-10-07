import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { UserListComponent } from './user-list/user-list.component';
import { UserRowComponent } from './user-row/user-row.component';

const usersModuleRoutes: Routes = [
  { path: '', component: UserListComponent }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserRowComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(usersModuleRoutes)
  ]
})
export class UsersModule { }
