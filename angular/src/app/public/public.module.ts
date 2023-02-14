import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PublicComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
