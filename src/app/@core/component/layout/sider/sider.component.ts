import {
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
  Component
} from "@angular/core";
import { Menu } from "@core/bean/dto/Menu";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.less"]
})
export class SiderComponent implements OnInit {
  @Input()
  isCollapsed = false;
  menu: Menu

  constructor() {}

  ngOnInit() {}

}
