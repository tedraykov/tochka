import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      height: '250px',
      width: '400px',
    });
  }
}
