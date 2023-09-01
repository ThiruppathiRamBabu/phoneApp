import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  mobile: any = '';

  constructor() { }

  add(value: any){
    this.mobile = this.mobile + value;  
  }

  del(){
    this.mobile = this.mobile.slice(0, -1);
  }

}
