import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListItem, Step } from 'src/app/private/models/list-item.model';
import { List } from 'src/app/private/models/list.model';
import { ListService } from 'src/app/private/services/list.service';
import { SidenavService } from 'src/app/private/services/sidenav.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: ListItem[];
  subscription!: Subscription;
  color: string;
  showCompleted = false;

  constructor(
    private listService: ListService,
    private sidenav: SidenavService
  ) {}
  ngOnInit(): void {
    this.tasks = this.listService.getSelectedList().tasks;

    this.subscription = this.listService.selectedListChanged.subscribe(
      (list: List) => {
        this.tasks = list.tasks;
        this.color = list.themeColor;
      }
    );
  }

  checkDetails(index: number) {
    this.sidenav.toggleRight();
    this.listService.checkDetails(index);
  }

  // function for getting amount of completed steps of each tasks
  getCompletedSteps(index: number) {
    let completedSteps = this.tasks[index].steps
      .slice()
      .filter((step: Step) => step.isCompleted == true);
    return completedSteps.length;
  }

  setCompleted(index: number) {
    this.listService.setTaskCompleted(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
