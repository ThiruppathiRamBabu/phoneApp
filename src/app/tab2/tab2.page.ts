import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recents: any[] = [];
  activeSeg = 'all';

  constructor() {
    let datas: any = localStorage.getItem('call');
    const number: any = JSON.parse(datas);
    if (number) {
      number.forEach((element: any) => {
      this.recents.push(element);
      });
      console.log('rec', this.recents);
    }

  }

}
