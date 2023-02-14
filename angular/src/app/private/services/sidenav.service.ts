import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav!: MatSidenav;
  private sidenavRight!: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  setSidenavRight(sidenav: MatSidenav) {
    this.sidenavRight = sidenav;
  }

  toggleRight() {
    return this.sidenavRight.toggle();
  }

  closeRight() {
    return this.sidenavRight.close();
  }

  open() {
    return this.sidenav.open();
  }

  close() {
    return this.sidenav.close();
  }

  toggle(): void {
    this.sidenav.toggle();
  }
}
