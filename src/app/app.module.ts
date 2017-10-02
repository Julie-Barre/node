// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// MATERIAL DESIGN MODULES
import {
  MdToolbarModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule,
  MdRadioModule,
  MdIconModule,
  MdListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { APP_ROUTES } from './app.routes';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home';
import { PersonComponent } from './person';
import { PeopleComponent } from './people';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdIconModule,
    MdListModule,
    HttpClientModule,
    APP_ROUTES
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent,
    PersonComponent,
    PeopleComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
