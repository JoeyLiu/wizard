import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {
  // toggle: boolean;
  pc: boolean;
  checked: boolean;
  head1_txt: string;
  head2_txt: string;
  head3_txt: string;
  head4_txt: string;
  col_count: any;
  checks = [

  ];
  constructor() { }

  ngOnInit() {
    this.checked = false;
    // this.checks.push(this.checked1);
    // this.checks.push(this.checked2);
    this.showTxt();
    if (document.body.clientWidth > 450) {
      this.pc = true;
      this.col_count = 4;
    } else {
      this.pc = false;
      console.log('hide toggle');
      this.col_count = 2;
    }
  }
  click(index: number){
    this.checks[index - 1] = !this.checks[index - 1];
    console.log(index-1 + 'clicked!');
  }
  check(index: number){
    //this.toggleall();
    // this.checked = true;
    this.checked = false;
    for (let i=0;i<4;i++) {
      if(i === index - 1) {
        this.checks[index - 1] = true;
      } else {
        this.checks[i] = false;
      }

    }

    console.log(this.checked);
  }
  uncheck(index: number){
    // this.checked = false;
    this.checks[index-1] = false;
    console.log(this.checks[index-1]);
  }
  showTxt(){
    this.head1_txt = "关注产品的全流程运营,采用最先进的基于公开数据产生随机数的参与式决策 (Participatory Decision Making)算法," +
      "确保过程公开透明,公平公正无黑箱操作可能";
    this.head2_txt = "竞猜链整个平台模块实现工具化，集成优秀的开源模块，" +
      "用户无论是本身参与竞猜项目，还是自己定制和发布竞猜项目，整个过程简洁流畅，不浪费时间和精力";
    this.head3_txt = "竞猜链平台提供数据分析,部署智能合约等访问接口," +
      "以及运维可视化管理工具.开发者能够进行个性化竞猜任务定制和发布,开设各个垂直领域的竞猜市场";
    this.head4_txt = "竞猜链" +
      "致力于成为区块链技术爱好者,体彩,福彩,博彩等竞猜任务发布者的交流平台.并打造去中心化的IM工具," +
      "客户可独立建立集竞猜任务发布 猜项目参与、线上交流、线上投票于一体的社区平台";
  }
  toggleall(){
    if(this.checked){
      for (let i=0;i<4;i++) {
        this.checks[i] = false;
      }

    }
    else {
      for (let i=0;i<4;i++) {
        this.checks[i] = true;
      }
    }
    this.checked = !this.checked;
  }
}
