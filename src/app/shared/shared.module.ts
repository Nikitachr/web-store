import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgLogoComponent } from 'src/app/shared/components/svgs/svg-logo/svg-logo.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { SvgSearchComponent } from 'src/app/shared/components/svgs/svg-search/svg-search.component';
import { SvgCloseComponent } from 'src/app/shared/components/svgs/svg-close/svg-close.component';
import { SvgStatusComponent } from 'src/app/shared/components/svgs/svg-status/svg-status.component';
import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';
import { SvgCartComponent } from 'src/app/shared/components/svgs/svg-cart/svg-cart.component';
import { SvgHamburgerComponent } from 'src/app/shared/components/svgs/svg-hamburger/svg-hamburger.component';
import { NavigationButtonComponent } from 'src/app/shared/components/navigation-button/navigation-button.component';
import { SvgArrowComponent } from 'src/app/shared/components/svgs/svg-arrow/svg-arrow.component';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { ExpansionPanelComponent } from 'src/app/shared/components/expansion-panel/expansion-panel.component';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';
import { ScrollTopComponent } from 'src/app/shared/components/scroll-top/scroll-top.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CounterComponent } from './components/counter/counter.component';

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
    NavigationButtonComponent,
    SvgArrowComponent,
    ProductCardComponent,
    ExpansionPanelComponent,
    CheckboxComponent,
    ScrollTopComponent,
    InputComponent,
    ButtonComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SvgLogoComponent,
    SearchComponent,
    SvgStatusComponent,
    SvgSearchComponent,
    SvgCartComponent,
    SvgHamburgerComponent,
    SvgArrowComponent,
    NavigationButtonComponent,
    ProductCardComponent,
    ExpansionPanelComponent,
    SvgCloseComponent,
    CheckboxComponent,
    ScrollTopComponent,
    InputComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
