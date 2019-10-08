import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/app/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfigureUserComponent } from '../configure-user/configure-user.component';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRowComponent implements OnInit {
  @Input() user: User;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  addUserDialog() {
    this.dialog.open(ConfigureUserComponent, {
      height: '400px',
      width: '320px',
      data: this.user
    });
  }
}

