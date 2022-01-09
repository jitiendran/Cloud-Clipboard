import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { CloudScannerComponent } from './cloud-scanner/cloud-scanner.component';
import { GetClipComponent } from './get-clip/get-clip.component';
import { SetClipComponent } from './set-clip/set-clip.component';

const routes: Routes = [
  {
    path: '',
    component: ClipboardComponent,
    children: [
      { path: '', component: SetClipComponent },
      { path: 'getClipboard', component: GetClipComponent },
      { path: 'qrCodeScanner', component: CloudScannerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
