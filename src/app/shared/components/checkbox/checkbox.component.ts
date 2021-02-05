import { Component, HostListener, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements OnInit {

  @Input() value = false;
  @Output() valueChange = new EventEmitter<boolean>();

  @HostListener('click', ['$event'])
  check(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
