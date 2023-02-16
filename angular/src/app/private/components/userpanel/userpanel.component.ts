import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.scss'],
})
export class UserpanelComponent implements OnInit {
  filePath = './assets/images/2.jpg';
  myForm: FormGroup;

  isDarkTheme = false;

  showPassword = false;
  editPersonal = false;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      img: [null],
      filename: [''],
    });
  }

  ngOnInit(): void {}

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];

    this.myForm.patchValue({
      img: file,
    });

    this.myForm.get('img').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submit() {
    console.log(this.myForm.value);
  }
}
