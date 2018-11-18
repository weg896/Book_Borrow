import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvailableForBorrowPage } from './available-for-borrow.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableForBorrowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvailableForBorrowPage]
})
export class AvailableForBorrowPageModule {}
