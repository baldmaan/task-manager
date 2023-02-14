import { formatDate } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ListItem } from 'src/app/private/models/list-item.model';
import { List } from 'src/app/private/models/list.model';
import { ListService } from 'src/app/private/services/list.service';
import { TaskSettingsService } from 'src/app/private/services/task-settings.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  addTaskActive = false;
  isRepeatOpen = false;
  isReminderOpen = false;
  color: string;
  subscription: Subscription;

  // make input active after showing
  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  addTaskForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    deadline: new FormControl(null),
    reminder: new FormControl(null),
    repeat: new FormControl(null),
  });

  constructor(
    private listService: ListService,
    private taskSettingsService: TaskSettingsService
  ) {}

  ngOnInit(): void {
    this.subscription = this.listService.selectedListChanged.subscribe(
      (list: List) => {
        this.color = list.themeColor;
      }
    );
  }

  onAddingTask() {
    if (this.addTaskForm.valid) {
      const newTask = new ListItem(this.addTaskForm.value.title);

      // need to fix
      if (this.addTaskForm.value.deadline) {
        newTask.deadline = formatDate(
          this.addTaskForm.value.deadline,
          'shortDate',
          'en-US'
        );
      }
      if (this.addTaskForm.value.reminder) {
        newTask.reminder = this.addTaskForm.value.reminder;
      }
      if (this.addTaskForm.value.repeat) {
        newTask.repeat = this.addTaskForm.value.repeat;
      }

      this.listService.addTask(newTask);

      // after adding list, input is hidden
      this.addTaskActive = false;
      this.addTaskForm.reset();
    }
  }

  closeAddTask() {
    if (this.addTaskForm.value.title == '') {
      this.addTaskActive = false;
    }
  }

  setRemindDate(index: number) {
    const remindDate = this.taskSettingsService.remindDate(index);
    const formattedDate = formatDate(remindDate, 'short', 'en-US');
    this.addTaskForm.controls['reminder'].setValue(formattedDate);

    this.isReminderOpen = false;
  }

  setRepeat(option: string) {
    this.addTaskForm.controls['repeat'].setValue(option);

    this.isRepeatOpen = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
