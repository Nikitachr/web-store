import { Component, OnInit } from '@angular/core';
import { CloseScrollStrategy, ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  isOpen: boolean;
  scrollStrategy: ScrollStrategy;

  constructor(private readonly sso: ScrollStrategyOptions) { }

  ngOnInit(): void {
    this.scrollStrategy = this.sso.block();
  }

}
