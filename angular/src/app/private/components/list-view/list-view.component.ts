import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { List } from '../../models/list.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  color: string;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.subscription = this.listService.selectedListChanged.subscribe(
      (list: List) => {
        this.color = list.themeColor;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
