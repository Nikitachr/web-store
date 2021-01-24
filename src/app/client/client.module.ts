import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from 'src/app/client/main-view/main-view.component';
import { HeaderComponent } from 'src/app/client/header/header.component';
import { FooterComponent } from 'src/app/client/footer/footer.component';
import { MainPageComponent } from 'src/app/client/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainViewComponent,
    children: [
      { path: '', pathMatch: 'full', component: MainPageComponent }
    ]
  }
];

@NgModule({
  declarations: [MainViewComponent, HeaderComponent, FooterComponent, MainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ClientModule { }
