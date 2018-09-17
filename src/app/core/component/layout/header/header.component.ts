import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input()
  isCollapsed = true;
  @Output() 
  isCollapsedChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  clickCollapsed() {
    this.isCollapsedChange.emit(!this.isCollapsed)
  }
}
