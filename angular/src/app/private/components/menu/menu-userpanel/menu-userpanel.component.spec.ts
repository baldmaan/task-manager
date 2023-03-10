import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUserpanelComponent } from './menu-userpanel.component';

describe('MenuUserpanelComponent', () => {
  let component: MenuUserpanelComponent;
  let fixture: ComponentFixture<MenuUserpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUserpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUserpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
