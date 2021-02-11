import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'src/app/client/main-pages/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogComponent } from 'src/app/client/main-pages/catalog/catalog.component';
import { SortPanelComponent } from 'src/app/client/main-pages/shared/sort-panel/sort-panel.component';
import { ExtensionPanelComponent } from 'src/app/client/main-pages/shared/extension-panel/extension-panel.component';
import { PriceSliderComponent } from 'src/app/client/main-pages/shared/sort-panel/sections/price-slider/price-slider.component';
import { UpPanelComponent } from 'src/app/client/main-pages/shared/up-panel/up-panel.component';
import { OptionComponent } from 'src/app/client/main-pages/shared/option/option.component';
import { ProductParamsResolver } from 'src/app/shared/resolvers/product-params.resolver';
import { MainPageResolver } from 'src/app/shared/resolvers/main-page.resolver';
import { OptionsComponent } from 'src/app/client/main-pages/shared/options/options.component';
import { DialogComponent } from 'src/app/client/main-pages/shared/dialog/dialog.component';
import { ProductComponent } from 'src/app/client/main-pages/product/product.component';
import { ProductPageResolver } from 'src/app/shared/resolvers/product.resolver';
import { DesignSelectComponent } from './shared/design-select/design-select.component';

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
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: {
      data: ProductPageResolver
    }
  }
];

@NgModule({
  declarations: [
    MainPageComponent,
    CatalogComponent,
    SortPanelComponent,
    ExtensionPanelComponent,
    PriceSliderComponent,
    UpPanelComponent,
    OptionComponent,
    OptionsComponent,
    DialogComponent,
    ProductComponent,
    DesignSelectComponent
  ],
  imports: [
    NgxGalleryModule,
    OverlayModule,
    FormsModule,
    NgxSliderModule,
    ReactiveComponentModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule
  ]
})
export class MainPagesModule { }
