import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { ClipboardService } from 'ngx-clipboard';
import { NgxCopyToClipboardComponent } from 'ngx-copy-to-clipboard';

@Component({
  selector: 'app-cloud-scanner',
  templateUrl: './cloud-scanner.component.html',
  styleUrls: ['./cloud-scanner.component.scss'],
})
export class CloudScannerComponent implements OnInit, AfterViewInit {
  constructor(private clipboard: ClipboardService) {}

  @ViewChild(QrScannerComponent, { static: false })
  qrScannerComponent: QrScannerComponent;
  data: string;

  ngOnInit() {
    this.data = '';
  }

  ngAfterViewInit(): void {
    this.qrScannerComponent.getMediaDevices().then((devices) => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe((result) => {
      console.log(result);
      this.data = result;
    });
  }

  copyClipboard() {
    // console.log(data);
    this.clipboard.copyFromContent(this.data);
  }
}
