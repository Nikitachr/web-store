import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'src/app/client/main-pages/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
  }
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MainPagesModule { }
