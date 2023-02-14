import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { List } from 'src/app/private/models/list.model';
import { ListService } from 'src/app/private/services/list.service';
import { SidenavService } from 'src/app/private/services/sidenav.service';

@Component({
  selector: 'app-menu-lists',
  templateUrl: './menu-lists.component.html',
  styleUrls: ['./menu-lists.component.scss'],
})
export class MenuListsComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  lists;
  subscription: Subscription;

  onAddList: boolean = false;

  addListForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(
    private listService: ListService,
    private sidenav: SidenavService
  ) {}

  ngOnInit(): void {
    this.subscription = this.listService.listsChanged.subscribe(
      (lists: List[]) => {
        this.lists = lists;
        console.log(lists);
      }
    );
    this.lists = this.listService.getLists();
  }

  onAddingList() {
    if (this.addListForm.valid) {
      const newList = new List(this.addListForm.value.title);
      this.listService.addList(newList);

      // after adding list, input is hidden
      this.onAddList = false;
      this.addListForm.controls['title'].setValue('');
    }
  }

  onSelectList(index: number) {
    this.listService.selectList(index);
    this.sidenav.close();
  }

  hideInput() {
    if (!this.addListForm.controls['title'].value) {
      this.onAddList = false;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
