import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { List } from 'src/app/private/models/list.model';
import { ListService } from 'src/app/private/services/list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Color, ColorPickerControl } from '@iplab/ngx-color-picker';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent implements OnInit, OnDestroy {
  // make input active after showing
  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  listTitle: string = 'Select task!';
  editTitle = false;
  openedOptions = false;
  openedSort = false;
  subscription!: Subscription;

  public colorPicker = new ColorPickerControl().setColorPresets([
    '#f9faff',
    '#ff6b6b',
    '#cc5de8',
    '#d0bfff',
    '#96f2d7',
    '#69db7c',
    '#ffd43b',
    '#ffa94d',
  ]);
  color: string;
  showColorPicker = false;
  showIconPicker = false;
  selectedIconPath = 'assets/svg/icon-picker/10.svg';

  icons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // form for edit title
  renameForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.subscription = this.listService.selectedListChanged.subscribe(
      (list: List) => {
        this.listTitle = list.name;
        this.color = list.themeColor;
        this.selectedIconPath = list.iconPath;
      }
    );

    this.colorPicker.valueChanges.subscribe((value: Color) => {
      this.listService.editTheme(value.toHexString());
    });
  }
  onEditTitle() {
    if (this.renameForm.valid) {
      let title = this.renameForm.controls['title'].value;
      // this.listTitle = title;
      this.listService.editListTitle(title);
      this.renameForm.reset();
      this.editTitle = false;
    }
  }

  changeIcon(icon: number) {
    this.listService.changeIcon(icon);
    this.showIconPicker = false;
  }

  onDeleteList() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
