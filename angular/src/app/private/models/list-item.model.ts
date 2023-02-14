export class ListItem {
  title: string;
  deadline: string | undefined;
  reminder: string | undefined;
  repeat: string | undefined;
  description: string | undefined;
  isCompleted: boolean;
  steps: Step[];
  index: number;

  constructor(title: string) {
    this.title = title;
    this.isCompleted = false;
    this.steps = [];
  }
}

export class Step {
  public title: string;
  public isCompleted: boolean;

  constructor(title: string) {
    this.title = title;
    this.isCompleted = false;
  }
}
