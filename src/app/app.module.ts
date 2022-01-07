import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { SetClipComponent } from './set-clip/set-clip.component';
import { GetClipComponent } from './get-clip/get-clip.component';

@NgModule({
  declarations: [AppComponent, IntroComponent, ClipboardComponent, SetClipComponent, GetClipComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
