import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Reading } from 'src/app/core/model/reading-model';
import { IntercomService } from 'src/app/core/services/intercom.service';
import { GraphData } from '../../core/model/graph-data-model';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.scss'],
})
export class ReadFileComponent implements OnInit {

  constructor(private popover:PopoverController, private intercom:IntercomService) { }

  ngOnInit() {}

  selectedFile(event){
    const file:File = event.target.files[0];
    if(file){
      file.text().then(dataText=>{
       let readings = this.processDataFromText(dataText);
        this.processDataToGraphModel(readings);
      })
    }
    this.popover.dismiss()
  }

  processDataFromText(data:string):Reading[]{
    let lines = data.split('\n');
    let finalData:Reading[] = [];    
    lines.forEach(line=>{
    if(line != ''){
      let lineColumn = line.split(';');
    let name= lineColumn[0]; 
    let time= lineColumn[1];
    let measureString:string = lineColumn[2];
    let temperature1String:string = lineColumn[3];  
    let temperature2String:string = lineColumn[4];    
    let reading:Reading = {name:name,time:time,
      measure: parseInt(measureString.split(':')[1]),
      temperature1:parseInt(temperature1String.split(':')[1]),
      temperature2:parseInt(temperature2String.split(':')[1])}
      finalData.push(reading);
    
    }
    })
  return finalData;
  }

  processDataToGraphModel(data:Reading[]){
    let graph:GraphData = {labels:[''],temperature1:{label:'',data:[]},temperature2:{label:'',data:[]},measurements:{label:'',data:[]}};
    data.forEach(reading=>{
      graph.boardName = reading.name;
      graph.labels.push(reading.time);
      graph.temperature1.label = 'Temperature 1';
      graph.temperature2.label = 'Temperature 2';
      graph.measurements.label = 'Measurements';
      graph.temperature1.data.push(reading.temperature1)
      graph.temperature2.data.push(reading.temperature2)
      graph.measurements.data.push(reading.measure)
    })
    this.intercom.dataSets.next(graph);
  }
}
