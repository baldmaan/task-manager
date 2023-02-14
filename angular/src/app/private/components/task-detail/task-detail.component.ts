import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  constructor(private sidenav: SidenavService) {}

  ngOnInit(): void {}
  return() {
    this.sidenav.toggleRight();
  }
}
