import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  ]
})
export class ExtensionPanelComponent implements OnInit {

  @Input() title: string;
  isExpand: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
