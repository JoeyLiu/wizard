import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  col_count: any;
  constructor() { }

  ngOnInit() {
    if (document.body.clientWidth < 450 ) {
      this.col_count = 2;
    } else {
      this.col_count = 4;
    }
  }

}
