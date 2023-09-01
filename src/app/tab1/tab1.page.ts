import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  favList: any[] = [];

  constructor() {
    let number: any = localStorage.getItem('favourit');
    const item: any = JSON.parse(number);
    if (item) {
      item.forEach((element: any) => {
        this.favList.push(element);
      });
      console.log('favList', this.favList)
    }
  }

}
