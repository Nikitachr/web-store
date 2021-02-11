import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() type: 'active' | 'disabled';
  @Input() direction: 'left' | 'right';
  color: string;
  contentColor: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.type){
      case 'active':
        this.color = '#76A9FF';
        this.contentColor = '#EFF0F6';
        break;
      case 'disabled':
        this.color = '#EFF0F6';
        this.contentColor = '#A0A3BD';
        break;
      default:
        this.color = '#76A9FF';
        this.contentColor = '#EFF0F6';
        break;
    }
  }
}
