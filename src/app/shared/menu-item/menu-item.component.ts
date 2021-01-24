import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() text: string;
  color = '#76A9FF';
  @HostListener('mouseenter', ['$event'])
  onHover(): void {
    this.color = '#2264D1';
  }
  @HostListener('mouseleave', ['$event'])
  onLeave(): void {
    this.color = '#76A9FF';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
