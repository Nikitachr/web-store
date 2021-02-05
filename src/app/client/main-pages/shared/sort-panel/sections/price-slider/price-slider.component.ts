import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceSliderComponent implements OnInit {

  value = 40;
  highValue = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
