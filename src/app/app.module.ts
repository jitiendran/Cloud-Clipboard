import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgQrScannerModule } from 'angular2-qrscanner';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { SetClipComponent } from './set-clip/set-clip.component';
import { GetClipComponent } from './get-clip/get-clip.component';
import { CloudScannerComponent } from './cloud-scanner/cloud-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ClipboardComponent,
    SetClipComponent,
    GetClipComponent,
    CloudScannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    QRCodeModule,
    NgQrScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
