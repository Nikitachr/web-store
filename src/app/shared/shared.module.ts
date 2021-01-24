import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgLogoComponent } from './svgs/svg-logo/svg-logo.component';
import { SearchComponent } from './search/search.component';
import { SvgSearchComponent } from './svgs/svg-search/svg-search.component';
import { SvgCloseComponent } from './svgs/svg-close/svg-close.component';
import { SvgStatusComponent } from './svgs/svg-status/svg-status.component';
import { SvgComponent } from 'src/app/shared/svgs/svg.component';
import { SvgCartComponent } from './svgs/svg-cart/svg-cart.component';
import { SvgHamburgerComponent } from './svgs/svg-hamburger/svg-hamburger.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SvgArrowComponent } from './svgs/svg-arrow/svg-arrow.component';

@NgModule({
  declarations: [
    SvgLogoComponent,
    SearchComponent,
    SvgSearchComponent,
    SvgCloseComponent,
    SvgStatusComponent,
    SvgComponent,
    SvgCartComponent,
    SvgHamburgerComponent,
    MenuItemComponent,
    SvgArrowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgLogoComponent,
    SearchComponent,
    SvgStatusComponent,
    SvgSearchComponent,
    SvgCartComponent,
    SvgHamburgerComponent,
    SvgArrowComponent,
    MenuItemComponent
  ]
})
export class SharedModule { }
