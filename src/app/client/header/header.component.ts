import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter<boolean>();
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.showMenu = !this.showMenu;
    this.isOpen.emit(this.showMenu);
  }

}
