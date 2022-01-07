import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @Input() duration!: number;
  loaded!: boolean;

  constructor() {
    this.loaded = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, this.duration * 1000);
  }

  setFadeout() {
    const styles = {
      animation: 'fadeOut' + ' ' + '.5s' + ' ' + 'forwards',
    };
    return this.loaded ? styles : {};
  }
}
