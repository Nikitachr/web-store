import { ElementRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private components = new Subject<any>();
  constructor() { }

  public addPopup(component: ComponentPortal<any>, ref: ElementRef): void {
    this.components.next({ component, ref });
  }

  public removePopup(): void {
    this.components.next();
  }

  public getPopup(): Observable<ComponentPortal<any>> {
    return this.components.asObservable();
  }

}
