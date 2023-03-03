import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import '@grapecity/spread-sheets-designer-resources-en';
import { DesignerModule } from '@grapecity/spread-sheets-designer-angular';
import '@grapecity/spread-excelio'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadSheetsModule,
    DesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
