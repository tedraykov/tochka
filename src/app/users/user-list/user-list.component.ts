import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService, User } from 'src/app/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers$();
  }

}