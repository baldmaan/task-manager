import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SidenavService } from 'src/app/private/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor(private sidenav: SidenavService) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.sidenav.toggle();
    this.sidenav.closeRight();
  }
}
