import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

import { AngularD3TreeLibService } from 'angular-d3-tree';
const dataTreeSimple= {
  "result": [
    {"id":"1","description":"*"},
    {"id":"2","description":"2","parent":"1"},
    {"id":"3","description":"3","parent":"2"},
    {"id":"4","description":"4","parent":"3"},
    {"id":"5","description":"5","parent":"4"},
    {"id":"6","description":"6","parent":"2"},
    {"id":"7","description":"7","parent":"2"},
    {"id":"8","description":"8","parent":"2"},
    {"id":"9","descripition":"9","parent":"2"},
    {"id":"10","description":"10","parent":"2"},
    {"id":"11","description":"11","parent":"2"},
    {"id":"12","description":"12","parent":"9"},
    {"id":"13","description":"13","parent":"9"},
    {"id":"14","description":"14","parent":"9"},
    {"id":"15","description":"15","parent":"9"},
    {"id":"12","description":"12","parent":"9"},
    {"id":"13","description":"13","parent":"9"},
    {"id":"14","description":"14","parent":"9"},
    {"id":"15","description":"15","parent":"9"}
  ]
};

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {
   data: any[];
  constructor(private treeService: AngularD3TreeLibService) {
    this.data= dataTreeSimple.result;
  }
  selectedNode: any;
    nodeUpdated(node:any){
    console.info("app detected node change");
  }
  nodeSelected(node:any){
    console.info("app detected node selected", node);
    this.selectedNode= node;
  }

  ngOnInit() {

  			d3.select("h4").style("color" , "red");	
			const width = 500;
            const height = 500;
           	//Create SVG element
            const svg = d3.select("p")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
          	//Create and append line
    		svg.append("line")
            .attr("x1", 100)
            .attr("x2", 500)
            .attr("y1", 50)
            .attr("y2", 250)
            .attr("stroke", "black")
  }
}
