import { Component, ViewEncapsulation } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import '@grapecity/spread-sheets-designer-resources-en';


// LICENSE INFORMATION
 var SpreadJSKey = "sjs-distribution-key";
 //GC.Spread.Sheets.LicenseKey = SpreadJSKey;
 //(ExcelIO as any).LicenseKey = SpreadJSKey;
 //(GC.Spread.Sheets as any).Designer.LicenseKey = "designer-component-distribution-key";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '95vw',
    height: '80vh'
  };
  private spread!: GC.Spread.Sheets.Workbook;;

  constructor() {
  }

  props = {
    styleInfo: 'width: 100%; height: 900px',
 };
}
