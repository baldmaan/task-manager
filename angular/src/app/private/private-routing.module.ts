import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'list/:id',
        component: ListViewComponent,
      },
      {
        path: 'userpanel',
        component: UserpanelComponent,
      },
      {
        path: '**',
        redirectTo: 'list/0',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
