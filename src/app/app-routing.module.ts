import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardComponent } from './clipboard/clipboard.component';

const routes: Routes = [{ path: '', component: ClipboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
