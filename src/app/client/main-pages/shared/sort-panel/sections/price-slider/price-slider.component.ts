import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceSliderComponent implements OnInit {

  @Input() max: number;
  @Input() min: number;
  value: number;
  highValue: number;
  options: Options;

  constructor() {
  }

  ngOnInit(): void {
    this.options = {
      floor: this.min,
      ceil: this.max,
      step: 0.1
    };
    this.value = this.min;
    this.highValue = this.max;
  }

}
