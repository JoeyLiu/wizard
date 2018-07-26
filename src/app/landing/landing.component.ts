import { Component, OnInit } from '@angular/core';
declare var returnCitySN: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  timer: any;
  offset: any;
  windowWidth: any;
  showSection3: any;
  showSection4: any;
  showSection5: any;
  showSection6: any;
  userAgent: any;
  pc: boolean;
  phone: boolean;
  // returnCitySN: any;
  constructor() { }

  ngOnInit() {
    // console.log(returnCitySN["cip"]);
    this.showAll();
    console.log(navigator.userAgent);
    if(navigator.userAgent.indexOf('iPad') !== -1) {
      this.userAgent = 2;
    }
    //console.log(navigator.appName);
    this.windowWidth = document.body.clientWidth;
    if (this.windowWidth < 500 || this.userAgent === 2) {
      this.showSection3 = true;
    }
    if (this.windowWidth < 450 ) {
      this.phone = true;
    } else {
      this.pc = true;
    }
    this.timer = setInterval(() => {
      //this.checkScreen();
    }, 200);
    //document.addEventListener('DOMContentLoaded',this.loaded());
  }
  checkScreen() {
    let currentOffset = window.pageYOffset;
    if (currentOffset !== this.offset) {
      this.offset = window.pageYOffset;
      console.log('当前滚动到： ' + window.pageYOffset);
    }
    if(this.offset > 10 && this.userAgent === 2 && !this.showSection4) {
      this.showSection4 = true;
      console.log('iPad 加载应用场景和服务体系');
    }
    if(this.offset > 10 && !this.showSection3) {
      this.showSection3 = true;
      console.log('PC 加载生态系统和双链系统');
    }
    if(this.offset > 250 && !this.showSection4) {
      this.showSection4 = true;
      console.log('PC/Phone 加载应用场景和服务体系');
    }
    if (this.windowWidth < 500 && this.offset > 900 && !this.showSection5 && !this.showSection6) {
      this.showSection5 = true;
      this.showSection6 = true;
      console.log('Phone 加载团队和路线图');
    }
    if(this.windowWidth > 1025 && this.offset > 1600 && !this.showSection5 && !this.showSection6) {
      this.showSection5 = true;
      this.showSection6 = true;
      console.log('PC 加载团队和路线图');
    }
    if(this.userAgent === 2 && this.offset > 600 && !this.showSection5 && !this.showSection6) {
      this.showSection5 = true;
      this.showSection6 = true;
      console.log('iPad 加载团队和路线图');
    }
  }

  loaded(){
    console.log('loaded');
  }
  showAll(){
    this.showSection6 = true;
    this.showSection5 = true;
    this.showSection4 = true;
    this.showSection3 = true;
  }
}
