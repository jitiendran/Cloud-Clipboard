import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-set-clip',
  templateUrl: './set-clip.component.html',
  styleUrls: ['./set-clip.component.scss'],
})
export class SetClipComponent implements OnInit {
  year?: number;
  data: string = '';
  text: FormGroup = new FormGroup({});
  constructor() {
    this.year = new Date().getFullYear();
    this.text = new FormGroup({
      data: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSetClip() {
    this.data = this.text?.value['data'];
    console.log(this.data);
  }
}
