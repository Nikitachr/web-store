import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatDialogModule } from '@angular/material/dialog';

import { MainViewComponent } from 'src/app/client/shared/main-view/main-view.component';
import { HeaderComponent } from 'src/app/client/shared/header/header.component';
import { FooterComponent } from 'src/app/client/shared/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from 'src/app/client/shared/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    loadChildren: () => import('./main-pages/main-pages.module').then(m => m.MainPagesModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  }
];

@NgModule({
  declarations: [MainViewComponent, HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    ReactiveComponentModule,
    CommonModule,
    SharedModule,
    OverlayModule,
    LayoutModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
