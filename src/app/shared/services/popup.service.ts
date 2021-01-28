import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private components = new Subject<ComponentPortal<any>>();
  constructor() { }

  public addPopup(component: ComponentPortal<any>): void {
    this.components.next(component);
  }

  public removePopup(): void {
    this.components.next();
  }

  public getPopup(): Observable<ComponentPortal<any>> {
    return this.components.asObservable();
  }

}
