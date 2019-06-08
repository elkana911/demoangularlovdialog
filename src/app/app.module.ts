import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LovDialog1Component } from './lov-dialog1/lov-dialog1.component';
import { MatDialogModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    LovDialog1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    BrowserAnimationsModule    ,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  entryComponents: [LovDialog1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
