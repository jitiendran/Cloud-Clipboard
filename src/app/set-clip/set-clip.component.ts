import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-set-clip',
  templateUrl: './set-clip.component.html',
  styleUrls: ['./set-clip.component.scss'],
})
export class SetClipComponent implements OnInit {
  year?: number;
  data: any;
  text: FormGroup = new FormGroup({});
  url: string;
  qrData: string;
  cid: number;
  bringPopup: boolean;
  loading: boolean;
  
  constructor(private http: HttpClient, private clipboardService:ClipboardService) {
    this.year = new Date().getFullYear();
    this.bringPopup = false;
    this.loading = false;
    this.url = `${API}/setClip`;
    this.text = new FormGroup({
      content: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSetClip() {
    this.loading = true;
    this.data = this.text.value;
    this.http.post<any>(this.url,this.data)
    .subscribe(data =>  {
        this.qrData = this.data.content;
        this.cid = data.cid;
        this.bringPopup = true;
        this.loading = false;
    });
  }

  copyId() {
      this.clipboardService.copyFromContent(this.cid as any as string);
  }
}
