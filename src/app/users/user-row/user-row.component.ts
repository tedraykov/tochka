import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/app/users.service';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRowComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
