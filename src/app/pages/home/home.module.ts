import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule
  ],
  declarations: [IndexComponent]
})
export class HomeModule { }
