import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ListItem } from 'src/app/private/models/list-item.model';
import { ListService } from 'src/app/private/services/list.service';

@Component({
  selector: 'app-task-detail-steps',
  templateUrl: './task-detail-steps.component.html',
  styleUrls: ['./task-detail-steps.component.scss'],
})
export class TaskDetailStepsComponent implements OnInit, OnDestroy {
  selectedTask: ListItem;
  subscription: Subscription;
  isImportant = false;
  isCompleted = false;

  constructor(private listService: ListService) {}

  editTask = false;
  ngOnInit(): void {
    this.subscription = this.listService.selectedTaskChanged.subscribe(
      (task: ListItem) => {
        this.selectedTask = task;
        this.isCompleted = task.isCompleted;

        this.editTitle.controls['title'].setValue(this.selectedTask.title);
      }
    );
  }

  // form for edit title
  editTitle = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  onEditTitle() {
    if (this.editTitle.valid) {
      this.selectedTask.title = this.editTitle.controls['title'].value;
      this.listService.editTask(this.selectedTask);
      this.editTask = false;
    }
  }

  onSetComplete() {
    this.isCompleted = !this.isCompleted;
    this.selectedTask.isCompleted = this.isCompleted;
    this.listService.editTask(this.selectedTask);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
