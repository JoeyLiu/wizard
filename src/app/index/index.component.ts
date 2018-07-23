import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  timer: any;
  offset: any;
  windowWidth: any;
  showSection3: any;
  showSection4: any;
  showSection5: any;
  showSection6: any;
  userAgent: any;
  el: any;
  constructor() { }

  ngOnInit() {
    this.el = document.getElementById('banner');
    this.el.className = 'banner';
    this.timer = setInterval(() => {
      this.checkScreen();
    }, 200);
  }
  checkScreen() {
    let currentOffset = window.pageYOffset;

    if(currentOffset > 150) {
      this.el.className = 'banner_scroll';
      console.log('show scroll banner');
    } else {
      this.el.className = 'banner';
      console.log('show normal banner');
    }
  }

}
