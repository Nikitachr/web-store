import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';
import { MenuComponent } from 'src/app/client/menu/menu.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { NavigationButtonComponent } from "src/app/shared/components/navigation-button/navigation-button.component";
import { SearchComponent } from "src/app/shared/components/search/search.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter<void>();

  constructor(private popup: PopupService, private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.element)
  }

  toggle(): void {
    this.isOpen.emit();
    this.popup.addPopup(new ComponentPortal<any>(MenuComponent), this.element);
  }


}
