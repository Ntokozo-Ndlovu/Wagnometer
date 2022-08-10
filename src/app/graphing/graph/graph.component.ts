import { Component, OnInit } from '@angular/core';
import { IntercomService } from 'src/app/core/services/intercom.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  data:any;
  originalData:any;
  multiAxisOptions:any;
  offset:number;
  constructor(private intercom:IntercomService) {
   }

  ngOnInit() {
    this.intercom.offSet.subscribe(newOffset=>{
      this.changeOffset(newOffset);
    })
    
    this.intercom.dataSets.subscribe(graph=>{
      this.data = {labels: graph.labels,     
        datasets:[   {
          label: graph.temperature1.label,
          fill: false,
          tension: .1,
          yAxisID:'y',
          borderColor:'#42A5F5',
          data: graph.temperature1.data
      },{
        label: graph.temperature2.label,
        fill: false,
        tension: .1,
        yAxisID:'y',
        borderColor:'#FFA726',
        data: graph.temperature2.data
    },{
        label: graph.measurements.label,
        fill: false,
        tension: .1,
        yAxisID:'y1',
        borderColor:'#482b7d',
        data: graph.measurements.data
    }
]}
    this.originalData = {...this.data};
    
    this.multiAxisOptions = {
        stacked: false,
        plugins: {
          title:{
              display:true,
              text: graph.boardName,
              font:{weight: 'bold', size:20}
            },
            legend: {
              display:true,
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
              title:{
                  display: true,
                  position:'left',
                  text: 'Temperature[In Celsius]',
                    font:{size:18}
              },
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y1: {
              title:{
                    display: true,
                    position:'right',
                    text: 'Wagner-units',
                    font:{size:18}}
                      ,
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: '#495057'
                },
                grid: {
                    drawOnChartArea: true,
                    color: '#ebedef'
                }
            }
        }
    };

})

    

  }

  changeOffset(offset:number){
    
    if(this.originalData != null && this.originalData.datasets[2].data){
    let tempData = {... this.originalData};
    let dataPoints = tempData.datasets[2].data;
        dataPoints.forEach((dataPoint,index)=> {
            dataPoints[index] = dataPoint - offset;
        });
        tempData.datasets[2].data = dataPoints;
        this.data = tempData; 
        console.log(tempData)
    }       
    }

  update(event){}
  
}
