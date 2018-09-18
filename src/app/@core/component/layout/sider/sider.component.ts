import {
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
  Component
} from '@angular/core';
import { MenuDto } from '@core/bean/dto/menu.dto';
import { SiderService } from '@core/service/sider.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {
  @Input()
  isCollapsed = false;
  menus: MenuDto[];

  constructor(private siderService: SiderService) {}

  ngOnInit() {
    this.siderService.getMenus().subscribe((data) => {
      this.menus = data.data;
    });
  }

}
