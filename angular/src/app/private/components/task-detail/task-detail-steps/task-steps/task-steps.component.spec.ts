import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStepsComponent } from './task-steps.component';

describe('TaskStepsComponent', () => {
  let component: TaskStepsComponent;
  let fixture: ComponentFixture<TaskStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
