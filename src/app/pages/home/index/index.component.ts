import { Component, OnInit } from '@angular/core';
import { SiderService } from '@core/service/sider.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(private siderService: SiderService) { }

  ngOnInit() {
  }

}
