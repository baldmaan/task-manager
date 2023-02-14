import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  @ViewChild('sidenavRight') public sidenavRight!: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.sidenavService.setSidenavRight(this.sidenavRight);
  }
}
