import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSignup() {
    this.router.navigateByUrl('/todo');
  }
}
