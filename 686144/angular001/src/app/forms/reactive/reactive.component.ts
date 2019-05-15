import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  simpleForm:any

  constructor() { }

  ngOnInit() {
    this.simpleForm=new FormGroup({
      fname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname:new FormControl("",this.customLengthValidator),
      hobby:new FormControl()
    })
  }

  customLengthValidator=function(control) {
console.log("Recieved Control Instance")
console.log(control)
if(control.value.length<6)
return {'lname':true}
  }
  saveData=function(something)
  {
    console.log(something)
  }
}
