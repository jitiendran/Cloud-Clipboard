import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-clip',
  templateUrl: './get-clip.component.html',
  styleUrls: ['./get-clip.component.scss'],
})
export class GetClipComponent implements OnInit {
  year?: number;
  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {}
}
