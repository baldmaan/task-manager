import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskSettingsService {
  constructor() {}

  remindDate(index: number) {
    let remindDate = new Date();

    switch (index) {
      case 0:
        remindDate.setHours(remindDate.getHours() + 3);
        break;
      case 1:
        remindDate.setDate(remindDate.getDate() + 1);
        break;
      case 2:
        remindDate.setDate(remindDate.getDate() + 7);
        break;
    }
    return remindDate;
  }
}
