import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PARAMS_PROVIDERS, URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';
import { Observable } from 'rxjs';
import { BREAKPOINT_PROVIDERS } from "src/app/shared/providers/brakepoint.provider";

@Component({
  selector: 'app-extension-panel',
  templateUrl: './extension-panel.component.html',
  styleUrls: ['./extension-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expand', [
    // ...
    state('true', style({
      transform: 'rotate(270deg)'
    })),
    state('false', style({
      transform: 'rotate(90deg)'
    })),
    transition('true <=> false', [
      animate('0.2s ease-in-out')
    ])
  ]),
    trigger('isExpand', [
      transition(':enter', [
        style({ height: 0 }),
        animate('200ms ease', style({ height: '*'})),
      ]),
      transition(':leave', [
        animate('200ms ease', style({ height: 0 }))
      ])
    ]),
  ],
  providers: [PARAMS_PROVIDERS]
})
export class ExtensionPanelComponent implements OnInit {

  @Input() title: string;
  @Input() data: string[];
  @Output() valueChange = new EventEmitter();
  isExpand: boolean;
  arr = [];
  query: string;

  constructor(@Inject(URL_PARAMS) readonly params$: Observable<any>) { }

  ngOnInit(): void {
    this.params$.subscribe(res => this.arr = res[this.title]?.split(',') || []);
  }

  check(value: boolean, item: string): void {
    if (value) {
      this.arr.push(item);
    } else {
      this.arr = this.arr.filter(el => el !== item);
    }
    this.query = this.arr.join(',');
    this.valueChange.emit(this.query);
  }



}
