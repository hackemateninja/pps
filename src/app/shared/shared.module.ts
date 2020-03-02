import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { TitleComponent } from './title/title.component';
import { AlertComponent } from './alert/alert.component';
import { StoreCardComponent } from './cards/store-card/store-card.component';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from '../guards/auth.guard';
import {TokenInterceptorService} from '../services/token-interceptor.service';

const components = [
  NavComponent,
  TitleComponent,
  AlertComponent,
  StoreCardComponent
];

const modules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  RouterModule,
  ReactiveFormsModule,
];

const providers = [AuthService, AuthGuard, {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true
}];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [...providers]
})
export class SharedModule { }
