import { Component, OnInit, Input,Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

constructor() { }
 ngOnInit() {
  }
  
@Input() name: string;
@Output() changeName = new EventEmitter();

 updateName() {
    // emitting changeName custom event
    this.changeName.emit();
  }
  

}
