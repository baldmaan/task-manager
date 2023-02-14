import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListsComponent } from './menu-lists.component';

describe('MenuListsComponent', () => {
  let component: MenuListsComponent;
  let fixture: ComponentFixture<MenuListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
