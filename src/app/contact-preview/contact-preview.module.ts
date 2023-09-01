import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPreviewPageRoutingModule } from './contact-preview-routing.module';

import { ContactPreviewPage } from './contact-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPreviewPageRoutingModule
  ],
  declarations: [ContactPreviewPage]
})
export class ContactPreviewPageModule {}
