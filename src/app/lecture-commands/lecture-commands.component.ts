import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-lecture-commands',
  templateUrl: './lecture-commands.component.html',
  styleUrls: ['./lecture-commands.component.scss']
})

export class LectureCommandsComponent implements OnInit {
  
  constructor() { }
  
  
    optionsSelect: Array<any>;
  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      ];
    }
  

}
