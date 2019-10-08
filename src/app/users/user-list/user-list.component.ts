import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService, User } from 'src/app/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfigureUserComponent } from '../configure-user/configure-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private userService: UsersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers$();
  }

  addUserDialog() {
    this.dialog.open(ConfigureUserComponent, {
      height: '400px',
      width: '320px',
      data: null
    });
  }
}
