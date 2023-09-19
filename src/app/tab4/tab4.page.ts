import { Component, } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  mobile: any = '';

  constructor(private call: CallNumber, private platform: Platform) { }

  add(value: any) {
    this.mobile = this.mobile + value;
  }

  del() {
    this.mobile = this.mobile.slice(0, -1);
  }

  getTelLink(){
    return `tel:${this.mobile}`;
  }

}
