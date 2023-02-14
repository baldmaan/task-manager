import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuUserpanelComponent } from './components/menu/menu-userpanel/menu-userpanel.component';
import { MenuListsComponent } from './components/menu/menu-lists/menu-lists.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ListHeaderComponent } from './components/list-view/list-header/list-header.component';
import { AddTaskComponent } from './components/list-view/add-task/add-task.component';
import { TasksComponent } from './components/list-view/tasks/tasks.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskDetailStepsComponent } from './components/task-detail/task-detail-steps/task-detail-steps.component';
import { TaskSettingsComponent } from './components/task-detail/task-settings/task-settings.component';
import { RouterModule } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../cilck-outside.directive';
import { TaskStepsComponent } from './components/task-detail/task-detail-steps/task-steps/task-steps.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorPickerModule } from '@iplab/ngx-color-picker';

@NgModule({
  declarations: [
    PrivateComponent,
    MenuComponent,
    MenuUserpanelComponent,
    MenuListsComponent,
    ListViewComponent,
    ListHeaderComponent,
    AddTaskComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskDetailStepsComponent,
    TaskStepsComponent,
    TaskSettingsComponent,
    ClickOutsideDirective,
    UserpanelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    ColorPickerModule,
  ],
})
export class PrivateModule {}
