import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationComponent } from 'src/components/location/location.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QrScannerComponent } from 'src/components/qr-scanner/qr-scanner.component';
import { QrLocationComponent } from 'src/components/qr-location/qr-location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    QrScannerComponent, QrLocationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
