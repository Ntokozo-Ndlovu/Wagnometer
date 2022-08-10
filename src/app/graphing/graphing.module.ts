import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/chart';

import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
@NgModule({
  declarations: [ GraphComponent],
  imports: [
    CommonModule, ChartModule
  ],
  exports:[GraphComponent]
})
export class GraphingModule { }
