import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { GraphData } from '../model/graph-data-model';

import { Reading } from '../model/reading-model';
@Injectable({
  providedIn: 'root'
})
export class IntercomService {
  dataSets:BehaviorSubject<GraphData>;
  offSet:BehaviorSubject<number>;
  constructor() { 
    this.dataSets = new BehaviorSubject<GraphData>({labels:[''],temperature1:{label:'',data:[]},temperature2:{label:'',data:[]},measurements:{label:'',data:[]}});
    this.offSet = new BehaviorSubject<number>(0);
  }
}
