import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.page.html',
  styleUrls: ['./contact-preview.page.scss'],
})
export class ContactPreviewPage {
  lists: any[] = [];
  isModalOpen = false;

  constructor() {
    let data: any = localStorage.getItem('selectedContact');
    const contact = JSON.parse(data);
    this.lists.push(contact);
    console.log('hi', this.lists);
  }

  addToFav(data: any) {
    let favourit = JSON.parse(localStorage.getItem('favourit') || '[]');
    favourit.push(data);
    localStorage.setItem('favourit', JSON.stringify(favourit));
    console.log('fav', favourit);
  }

  call(item:any){
    let phone = JSON.parse(localStorage.getItem('call') || '[]');
    phone.push(item);
    localStorage.setItem('call', JSON.stringify(phone));
    console.log('call', phone);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}



