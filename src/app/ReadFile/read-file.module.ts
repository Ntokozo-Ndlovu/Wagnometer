import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ReadFileComponent } from './read-file/read-file.component';
@NgModule({
  declarations: [ReadFileComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ReadFileModule { }
