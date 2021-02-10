import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppState, selectParams } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { tap } from "rxjs/operators";

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
  @Input() data: string[] | any;
  @Output() valueChange = new EventEmitter();
  isExpand: boolean;
  arr = [];
  query: string;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(selectParams).pipe(
      tap(_ => this.cd.markForCheck())
    ).subscribe(res => this.arr = res[this.title]?.split(',') || []);
    console.log(this.data.min);
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
