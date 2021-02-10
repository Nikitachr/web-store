import { ChangeDetectionStrategy, Component, HostListener, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent {

  @Input() title = 'title';
  @Output() delete = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onClick(): void {
    this.delete.emit();
  }
  constructor() { }

}
