import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { GetClipComponent } from './get-clip/get-clip.component';
import { SetClipComponent } from './set-clip/set-clip.component';

const routes: Routes = [
  {
    path: '',
    component: ClipboardComponent,
    children: [
      { path: '', component: SetClipComponent },
      { path: 'setClipboard', component: GetClipComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
