import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { ListItem } from 'src/app/private/models/list-item.model';
import { ListService } from 'src/app/private/services/list.service';
import { SidenavService } from 'src/app/private/services/sidenav.service';
import { TaskSettingsService } from 'src/app/private/services/task-settings.service';

@Component({
  selector: 'app-task-settings',
  templateUrl: './task-settings.component.html',
  styleUrls: ['./task-settings.component.scss'],
})
export class TaskSettingsComponent implements OnInit, OnDestroy {
  isReminderOpen = false;
  isRepeatOpen = false;

  selectedTask: ListItem;
  subscription: Subscription;

  taskDetails = new FormGroup({
    deadline: new FormControl(''),
    reminder: new FormControl(''),
    repeat: new FormControl(''),
    file: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private taskSettingsService: TaskSettingsService,
    private listService: ListService,
    private sidenav: SidenavService
  ) {}

  ngOnInit(): void {
    this.subscription = this.listService.selectedTaskChanged.subscribe(
      (task: ListItem) => {
        this.selectedTask = task;
        this.setValuesInForm();
      }
    );
  }

  setValuesInForm() {
    this.taskDetails.patchValue({
      deadline: new Date(this.selectedTask.deadline),
      reminder: this.selectedTask.reminder,
      repeat: this.selectedTask.repeat,
      description: this.selectedTask.description,
    });
  }
  setRemindDate(index: number) {
    const remindDate = this.taskSettingsService.remindDate(index);
    const formattedDate = formatDate(remindDate, 'short', 'en-US');
    this.taskDetails.controls['reminder'].setValue(formattedDate);

    this.isReminderOpen = false;
  }

  setRepeat(option: string) {
    this.taskDetails.controls['repeat'].setValue(option);

    this.isRepeatOpen = false;
  }

  onSubmit() {
    const formValue = this.taskDetails.value;

    if (!isNaN(formValue.deadline)) {
      this.selectedTask.deadline = formValue.deadline;
    }

    this.selectedTask.reminder = formValue.reminder;
    this.selectedTask.repeat = formValue.repeat;
    this.selectedTask.description = formValue.description;

    this.listService.editTask(this.selectedTask);
    this.sidenav.closeRight();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
