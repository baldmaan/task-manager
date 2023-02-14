import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ListItem, Step } from 'src/app/private/models/list-item.model';
import { ListService } from 'src/app/private/services/list.service';

@Component({
  selector: 'app-task-steps',
  templateUrl: './task-steps.component.html',
  styleUrls: ['./task-steps.component.scss'],
})
export class TaskStepsComponent implements OnInit {
  steps: Step[] = [];
  subscription!: Subscription;

  addStepInput = false;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.steps = this.listService.getSelectedTask().steps;
    this.subscription = this.listService.selectedTaskChanged.subscribe(
      (task: ListItem) => {
        this.steps = this.listService.getSelectedTask().steps;
      }
    );
  }

  // form for add step
  addStep = new FormGroup({
    title: new FormControl('Add step', Validators.required),
  });
  setVisible() {
    this.addStepInput = true;
    this.addStep.reset();
  }

  onAddStep() {
    if (this.addStep.valid) {
      const title = this.addStep.controls['title'].value;
      this.steps.push(new Step(title));
      this.addStepInput = false;
      this.addStep.controls['title'].setValue('Add step');
      this.listService.addStep(this.steps);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
