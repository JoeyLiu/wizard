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
  countDown: any;
  windowWidth: any;
  showSection1: any;
  showSection2: any;
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
    this.countDown = 0;
    // console.log(returnCitySN["cip"]);
    this.showAll();
    //this.hideAll();
    console.log(navigator.userAgent);
    if(navigator.userAgent.indexOf('iPad') !== -1) {
      this.userAgent = 2;
    }
     //this.windowWidth = ;


    this.timer = setInterval(() => {
      //this.checkScreen();
      this.countDown++;
      if (this.countDown > 5){
        //this.showAll();
      }

    }, 1000);
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
    this.showSection1 = true;
    this.showSection2 = true;
    this.showSection6 = true;
    this.showSection5 = true;
    this.showSection4 = true;
    this.showSection3 = true;
    if (document.body.clientWidth < 450 ) {
      this.phone = true;
      console.log('show phone service');
    } else {
      this.pc = true;
    }
  }
  hideAll(){
    this.showSection1 = false;
    this.showSection2 = false;
    this.showSection6 = false;
    this.showSection5 = false;
    this.showSection4 = false;
    this.showSection3 = false;
  }
}
