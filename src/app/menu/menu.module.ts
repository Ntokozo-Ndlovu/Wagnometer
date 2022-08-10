import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SetOffsetItemComponent } from './set-offset-item/set-offset-item.component';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent, SetOffsetItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
