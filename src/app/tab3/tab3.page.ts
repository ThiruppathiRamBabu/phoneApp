import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
// import data from '../../assets/data.json';
import { IonItemGroup } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: any[] = [];
  @ViewChildren(IonItemGroup, { read: ElementRef })
  itemGroups!: QueryList<any>;
  scroll = false;
  contactList: any[] = [];
  list: any[] = [];
  phones: string[] = [];
  addForm: FormGroup;
  imageUrl: any;


  constructor(private db: DatabaseService, private router: Router) {
    this.addForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    })

    this.db.getDataFromDB().subscribe(
      (response: any) => {
        console.log(response);
        this.list = this.contactList.concat(response.data);
        this.contactList = this.contactList.concat(this.list);

        const sorted = this.contactList.sort((a, b) => {
          if (a.first_name < b.first_name) { return -1; }
          if (a.first_name > b.first_name) { return 1; }
          return 0;
        });

        let first = null;

        for (let i = 0; i < sorted.length; i++) {
          const contact = sorted[i];
          if (!first || first != contact.first_name[0]) {
            first = contact.first_name[0];
            this.data.push({ key: first, users: [] });
          }
          this.data[this.data.length - 1].users.push(contact);
        }

      })
    console.log('res', this.data);


    // let number: any = localStorage.getItem('contacts');
    // const item: any = JSON.parse(number);
    // if (item) {
    //   item.forEach((number: any) => {
    //     this.contactList.push(number);
    //   });
    //   console.log('contact', this.contactList);
    // }

  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  scrollToLetter(letter: any) {
    for (let i = 0; i < this.data.length; i++) {
      const group = this.data[i];
      if (group.key == letter) {
        const group = this.itemGroups.filter((element, index) => index == i);
        if (group && group.length > 0) {
          const el = group[0];
          el.nativeElement.scrollIntoView();
        }
        return;
      }
    }
  }

  letterScrollActive(active: any) {
    this.scroll = active;
  }

  addPhone() {
    this.phones.push('New Phone');
  }

  removePhone(phone: string) {
    const phoneIndex = this.phones.indexOf(phone);
    if (phoneIndex !== -1) {
      this.phones.splice(phoneIndex, 1);
    }
  }

  addContact() {
    if (this.addForm.valid) {
      let form: any = {
        first_name: this.addForm.value.first_name,
        last_name: this.addForm.value.last_name,
        number: this.addForm.value.number,
      };

      // let storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      // storedContacts.push(form);
      // localStorage.setItem('contacts', JSON.stringify(storedContacts));

      this.db.postDataToDB(form).subscribe(result => console.log('add', result));
      this.addForm.reset();
    }
  }

  addPhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      saveToGallery: true,
    });
    this.imageUrl = 'data: image/jpeg;base64,' + image.base64String;
    console.log('url', this.imageUrl);
  }

  getContact(user: any) {
    localStorage.setItem('selectedContact', JSON.stringify(user));
    console.log('user', user);
    this.router.navigate(['/contact-preview']);
  }

}
