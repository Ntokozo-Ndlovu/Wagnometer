import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() route:string = '';
  @Input() name:string = '';

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  handleClick(event){
    console.log(`${name} menu item clicked`)
    this.router.navigateByUrl('/readfile')
  }
  
}
