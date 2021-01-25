import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from 'src/app/client/main-view/main-view.component';
import { HeaderComponent } from 'src/app/client/header/header.component';
import { FooterComponent } from 'src/app/client/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { OverlayModule } from '@angular/cdk/overlay';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainViewComponent,
    loadChildren: () => import('./main-pages/main-pages.module').then(m => m.MainPagesModule)
  }
];

@NgModule({
  declarations: [MainViewComponent, HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    OverlayModule
  ]
})
export class ClientModule { }
