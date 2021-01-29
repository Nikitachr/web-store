import { Component, ElementRef, OnInit } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { PopupService } from 'src/app/shared/services/popup.service';
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'web-store';
  constructor(private overlay: Overlay, private popupService: PopupService) {
  }



  ngOnInit() {
    this.popupService.getPopup().subscribe((res: any) => this.createPopup(res.component, res.ref));
  }

  createPopup(component: ComponentPortal<any>, ref: ElementRef): void {
    const config = new OverlayConfig();
    config.hasBackdrop = false;
    config.width = '100%';
    config.positionStrategy = this.overlay.position().connectedTo(ref, {originX: 'start', originY: 'bottom'},
      {overlayX: 'start', overlayY: 'top'});
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(component);
  }
}


