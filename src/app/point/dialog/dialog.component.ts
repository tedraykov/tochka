import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User;
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users$ = this.userService.getAllUsers$();
  }

  addPoint() {
    if (this.selectedUser) {
      this.userService.addPoint(this.selectedUser);
    }
  }
}
