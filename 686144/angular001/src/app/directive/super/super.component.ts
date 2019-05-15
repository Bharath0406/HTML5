import { Component, OnInit } from '@angular/core';
import { Capability } from 'protractor';
import { checkNoChangesInRootView } from '@angular/core/src/render3/instructions';
import { checkNoChangesNode } from '@angular/core/src/view/view';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
friends = ["Krishna","Venkat","Prasad","Chiru","Durga"]

locations=[
  {
    "City": "Chennai",
    "Code": "044"
  },

  {
    
    "City": "Mumbai",
    "Code": "022"
  },

  {
    "City": "Bengaluru",
    "Code": "080"
  },

  {
    "City": "Delhi",
    "Code": "011"
  }

]

display:boolean=true
checkOne:boolean=true

playHideAndSeek=function(){
  console.log("First Function Call !!!")
  this.display=this.display?false:true
}

displayAnyOne=function()
{
  console.log("displayAnyOne is calling")
  this.checkOne=this.checkOne?false:true
}

check="AVP"


  constructor() { }

  ngOnInit() {
  }

}
