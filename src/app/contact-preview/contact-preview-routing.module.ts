import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPreviewPage } from './contact-preview.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPreviewPageRoutingModule {}
