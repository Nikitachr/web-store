import { Component, HostListener, Input, OnInit } from '@angular/core';

export enum EButtonType {
  Nav = 'Nav',
  Active = 'Active',
  Disabled = 'Disabled'
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {

  @Input() type: EButtonType;
  @Input() text: string;
  color: string;
  @HostListener('mouseenter', ['$event'])
  onHover(): void {
    if (this.type === EButtonType.Nav) {
      this.color = '#2264D1';
    }
  }
  @HostListener('mouseleave', ['$event'])
  onLeave(): void {
    if (this.type === EButtonType.Nav) {
      this.color = '#76A9FF';
    }
  }

  constructor() { }

  ngOnInit(): void {
    switch (this.type) {
      case EButtonType.Active:
        this.color = '#fff';
        break;
      case EButtonType.Disabled:
        this.color = '#5c5c5c';
        break;
      case EButtonType.Nav:
        this.color = '#2264D1';
        break;
    }
  }

}
