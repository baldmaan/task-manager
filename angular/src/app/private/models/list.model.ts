import { ListItem } from './list-item.model';

export class List {
  name: string;
  iconPath: string;
  tasks: ListItem[];
  themeColor: string;

  constructor(name: string, icon?: string) {
    this.name = name;
    this.tasks = [new ListItem('siema')];
    if (icon) {
      this.iconPath = icon;
    } else {
      this.iconPath = 'assets/svg/icon-picker/10.svg';
    }
  }
}
