import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent implements OnInit {
  loaded!: boolean;
  constructor(private router: Router) {
    this.loaded = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = false;
    }, 4500);
  }

  onScan() {
    this.router.navigateByUrl('/qrCodeScanner');
  }
}
