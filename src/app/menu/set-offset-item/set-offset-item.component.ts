import { Component, OnInit } from '@angular/core';
import { IntercomService } from 'src/app/core/services/intercom.service';

@Component({
  selector: 'app-set-offset-item',
  templateUrl: './set-offset-item.component.html',
  styleUrls: ['./set-offset-item.component.scss'],
})
export class SetOffsetItemComponent implements OnInit {

  constructor(private interCom:IntercomService) { }

  ngOnInit() {}
  onOffsetChange(event){
    this.interCom.offSet.next(event.target.value)
  }
}
