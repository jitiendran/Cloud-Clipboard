import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-clip',
  templateUrl: './set-clip.component.html',
  styleUrls: ['./set-clip.component.scss'],
})
export class SetClipComponent implements OnInit {
  year?: number;
  constructor() {
    this.year = new Date().getFullYear();
  }
  ngOnInit(): void {}
}
