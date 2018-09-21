import { LayoutComponent } from '@core/component/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule',
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
