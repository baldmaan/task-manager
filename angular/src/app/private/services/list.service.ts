import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { ListItem, Step } from '../models/list-item.model';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  listsChanged = new Subject<List[]>();
  selectedListChanged = new Subject<List>();
  selectedTaskChanged = new Subject<ListItem>();

  private lists: List[] = [
    new List('Important', 'assets/svg/star.svg'),
    new List('Groceries'),
  ];
  private selectedList: List = this.lists[0];

  selectedListIndex = 0;
  selectedTaskIndex = 0;

  constructor() {}

  // list
  getLists() {
    return this.lists.slice();
  }
  getSelectedList() {
    this.selectedListChanged.next(this.lists[this.selectedListIndex]);
    return this.lists[this.selectedListIndex];
  }

  addList(newList: List) {
    this.lists.push(newList);
    this.listsChanged.next(this.lists.slice());
  }

  selectList(index: number) {
    // this.selectedListChanged.next(this.selectedList);

    this.selectedListIndex = index;
    this.selectedListChanged.next(this.lists[this.selectedListIndex]);
  }

  editListTitle(title: string) {
    // this.selectedList.name = title;

    this.lists[this.selectedListIndex].name = title;

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);

    this.listsChanged.next(this.lists.slice());
  }

  editTheme(color: string) {
    this.lists[this.selectedListIndex].themeColor = color;

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);

    this.listsChanged.next(this.lists.slice());
  }

  changeIcon(icon: number) {
    this.lists[this.selectedListIndex].iconPath =
      'assets/svg/icon-picker/' + icon + '.svg';

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);

    this.listsChanged.next(this.lists.slice());
  }

  // task

  getSelectedTask() {
    return this.lists[this.selectedListIndex].tasks[this.selectedTaskIndex];
  }

  addTask(newTask: ListItem) {
    this.lists[this.selectedListIndex].tasks.push(newTask);

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);
  }

  setTaskCompleted(index: number) {
    this.lists[this.selectedListIndex].tasks[index].isCompleted =
      !this.lists[this.selectedListIndex].tasks[index].isCompleted;

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);
  }

  checkDetails(index: number) {
    this.selectedTaskIndex = index;
    this.selectedTaskChanged.next(
      this.lists[this.selectedListIndex].tasks[index]
    );
  }

  editTask(task: ListItem) {
    this.lists[this.selectedListIndex].tasks[this.selectedTaskIndex] = task;

    this.selectedTaskChanged.next(
      this.lists[this.selectedListIndex].tasks[this.selectedTaskIndex]
    );

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);
  }

  // editTaskDetails(task: ListItem) {
  //   this.selectedTask = task;
  //   this.selectedTaskChanged.next(this.selectedTask);
  // }

  // step
  addStep(steps: Step[]) {
    this.lists[this.selectedListIndex].tasks[this.selectedTaskIndex].steps =
      steps;

    this.selectedTaskChanged.next(
      this.lists[this.selectedListIndex].tasks[this.selectedTaskIndex]
    );

    this.selectedListChanged.next(this.lists[this.selectedListIndex]);
  }
}
