import { MenuDto } from '@core/bean/dto/menu.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRootDto } from '@core/bean/dto/api-root.dto';

@Injectable({
  providedIn: 'root'
})
export class SiderService {

  constructor(private http: HttpClient) { }

  getMenus() {
    return this.http.post<ApiRootDto<MenuDto[]>>('user/getMenus', {

    });
  }

}
