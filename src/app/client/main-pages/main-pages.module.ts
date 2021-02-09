import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'src/app/client/main-pages/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogComponent } from './catalog/catalog.component';
import { SortPanelComponent } from './shared/sort-panel/sort-panel.component';
import { ExtensionPanelComponent } from './shared/extension-panel/extension-panel.component';
import { PriceSliderComponent } from './shared/sort-panel/sections/price-slider/price-slider.component';
import { BrandsComponent } from './shared/sort-panel/sections/brands/brands.component';
import { UpPanelComponent } from './shared/up-panel/up-panel.component';
import { OptionComponent } from './shared/option/option.component';
import { ProductParamsResolver } from 'src/app/shared/resolvers/product-params.resolver';
import { MainPageResolver } from 'src/app/shared/resolvers/main-page.resolver';
import { AppModule } from "src/app/app.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: {
      data: ProductParamsResolver
    }
  },
  {
    path: 'main',
    component: MainPageComponent,
    resolve: {
      data: MainPageResolver
    }
  },
];

@NgModule({
  declarations: [
    MainPageComponent,
    CatalogComponent,
    SortPanelComponent,
    ExtensionPanelComponent,
    PriceSliderComponent,
    BrandsComponent,
    UpPanelComponent,
    OptionComponent
  ],
    imports: [
      OverlayModule,
      FormsModule,
      NgxSliderModule,
      ReactiveComponentModule,
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes)
    ]
})
export class MainPagesModule { }
