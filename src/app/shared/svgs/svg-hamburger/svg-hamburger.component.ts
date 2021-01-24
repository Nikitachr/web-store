import { Component } from '@angular/core';
import { SvgComponent } from 'src/app/shared/svgs/svg.component';

@Component({
  selector: 'app-svg-hamburger',
  templateUrl: './svg-hamburger.component.html'
})
export class SvgHamburgerComponent extends SvgComponent {

  constructor() {
    super();
  }

}
