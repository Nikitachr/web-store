import { Component, OnInit } from '@angular/core';
import { SvgComponent } from 'src/app/shared/svgs/svg.component';

@Component({
  selector: 'app-svg-logo',
  templateUrl: './svg-logo.component.html'
})
export class SvgLogoComponent extends SvgComponent{

  constructor() {
    super();
  }

}
