import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveComponentModule } from '@ngrx/component';

import { MainViewComponent } from 'src/app/client/main-view/main-view.component';
import { HeaderComponent } from 'src/app/client/header/header.component';
import { FooterComponent } from 'src/app/client/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from 'src/app/client/menu/menu.component';
import { MainPageResolver } from 'src/app/shared/resolvers/main-page.resolver';


const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    loadChildren: () => import('./main-pages/main-pages.module').then(m => m.MainPagesModule),
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
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
