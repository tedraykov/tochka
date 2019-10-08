import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UsersService } from 'src/app/users.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-user',
  templateUrl: './configure-user.component.html',
  styleUrls: ['./configure-user.component.scss']
})
export class ConfigureUserComponent implements OnInit {
  userForm = this.fb.group({
    userName: [this.data ? this.data.name : '', Validators.required],
    points: [this.data ? this.data.points : '']
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder,
    private userService: UsersService) { }

  ngOnInit() {
  }
  pushUser() {
    const userName = this.userForm.get('userName').value;
    const points = +this.userForm.get('points').value;
    const user: User = {name: userName, points, id: ''};
    if (this.data) {
      user.id = this.data.id;
      this.userService.updateUser(user);
    } else {
      this.userService.addUser(user);
    }
  }

  deleteUser() {
    if (this.data) {
      this.userService.deleteUser(this.data);
    }
  }
}
