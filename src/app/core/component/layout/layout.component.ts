import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }
  
 

}
