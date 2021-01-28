import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'src/app/client/main-pages/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogComponent } from './catalog/catalog.component';
import { SortPanelComponent } from './UI/sort-panel/sort-panel.component';
import { ExtensionPanelComponent } from './UI/extension-panel/extension-panel.component';
import { PriceSliderComponent } from './UI/sort-panel/sections/price-slider/price-slider.component';
import { FormsModule } from "@angular/forms";
import { BrandsComponent } from './UI/sort-panel/sections/brands/brands.component';

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
  declarations: [MainPageComponent, CatalogComponent, SortPanelComponent, ExtensionPanelComponent, PriceSliderComponent, BrandsComponent],
  imports: [
    FormsModule,
    NgxSliderModule,
    ReactiveComponentModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MainPagesModule { }
