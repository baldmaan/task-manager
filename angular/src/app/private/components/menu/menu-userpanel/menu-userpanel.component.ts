import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/private/services/sidenav.service';

@Component({
  selector: 'app-menu-userpanel',
  templateUrl: './menu-userpanel.component.html',
  styleUrls: ['./menu-userpanel.component.scss'],
})
export class MenuUserpanelComponent implements OnInit {
  constructor(public sidenav: SidenavService) {}

  ngOnInit(): void {}
}
