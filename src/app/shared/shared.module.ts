import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SvgLogoComponent } from './components/svgs/svg-logo/svg-logo.component';
import { SearchComponent } from './components/search/search.component';
import { SvgSearchComponent } from './components/svgs/svg-search/svg-search.component';
import { SvgCloseComponent } from './components/svgs/svg-close/svg-close.component';
import { SvgStatusComponent } from './components/svgs/svg-status/svg-status.component';
import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';
import { SvgCartComponent } from './components/svgs/svg-cart/svg-cart.component';
import { SvgHamburgerComponent } from './components/svgs/svg-hamburger/svg-hamburger.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import { SvgArrowComponent } from './components/svgs/svg-arrow/svg-arrow.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { InputComponent } from './components/input/input.component';

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
    DropDownListComponent,
    CheckboxComponent,
    ScrollTopComponent,
    InputComponent
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
    InputComponent
  ]
})
export class SharedModule { }
