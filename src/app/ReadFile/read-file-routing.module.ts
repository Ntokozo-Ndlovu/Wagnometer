import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadFileComponent } from './read-file/read-file.component';

const route:Routes =[{
  path:'readfile',
  component: ReadFileComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class ReadFileRoutingModule { }
