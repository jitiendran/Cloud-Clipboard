import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-get-clip',
  templateUrl: './get-clip.component.html',
  styleUrls: ['./get-clip.component.scss'],
})
export class GetClipComponent implements OnInit {
  year?: number;
  data: string;
  text: FormGroup = new FormGroup({});
  url: string;
  loading: boolean;

  
  constructor(private http:HttpClient) {
    this.year = new Date().getFullYear();
    this.data = '';
    this.url = `${API}/getClip`;
    this.loading = false;
    this.text = new FormGroup({
        cid: new FormControl(''),
        password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onGetClip() {
    this.loading = true;
    this.http.post<any>(this.url,this.text.value)
    .subscribe(data => {
        this.data = data.content;
        this.loading = false;
    });
  }
}
