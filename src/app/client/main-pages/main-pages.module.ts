import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'src/app/client/main-pages/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [MainPageComponent, CatalogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MainPagesModule { }
