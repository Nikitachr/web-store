import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { translateInAnimation } from 'src/app/shared/animations/translateIn.animation';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { PopupService } from "src/app/shared/services/popup.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  animations: [translateInAnimation]
})
export class MainViewComponent implements OnInit {

  isOpen: boolean;
  scrollStrategy: ScrollStrategy;


  constructor(private readonly sso: ScrollStrategyOptions, public breakpointObserver: BreakpointObserver, private popup: PopupService) {

  }

  ngOnInit(): void {
    this.scrollStrategy = this.sso.block();
    this.popup.getPopup().subscribe(res => console.log(res));
    this.breakpointObserver
      .observe(['(max-width: 870px)'])
      .subscribe((state: BreakpointState) => {
        if (!state.matches) {
          this.isOpen = false;
        }
      });

  }

  open(): void {
    this.isOpen = !this.isOpen;
  }

}
