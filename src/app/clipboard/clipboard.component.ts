import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent implements OnInit {
  loaded!: boolean;
  constructor() {
    this.loaded = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = false;
    }, 4500);
  }
}
