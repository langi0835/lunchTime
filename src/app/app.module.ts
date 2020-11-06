import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';
import { LunchMenuComponent } from './lunch-menu/lunch-menu.component';
import { LunchListComponent } from './lunch-list/lunch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LunchMenuComponent,
    LunchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
