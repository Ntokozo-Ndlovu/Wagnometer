import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { ReadFileComponent } from 'src/app/ReadFile/read-file/read-file.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private popOver:PopoverController) { }

  ngOnInit() {}
  
  async createReadFilePopover(){
   let popover = await this.popOver.create({component:ReadFileComponent});
   await popover.present()
  }
}
