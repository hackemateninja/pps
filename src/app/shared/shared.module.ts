import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { TitleComponent } from './title/title.component';
import { AlertComponent } from './alert/alert.component';
import { StoreCardComponent } from './cards/store-card/store-card.component';

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
  RouterModule
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
