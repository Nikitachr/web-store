import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';
import { MenuComponent } from "src/app/client/menu/menu.component";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter<void>();

  constructor(private popup: PopupService) { }

  ngOnInit(): void {

  }

  toggle(): void {
    this.isOpen.emit();
    this.popup.addPopup(new ComponentPortal(MenuComponent));
  }

}
