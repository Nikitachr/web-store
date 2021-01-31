import { Action } from '@ngrx/store';

export enum UiActionTypes {
  toggleMenu = '[UI] Toggle menu',
  disableMenu = '[UI] Disable menu'
}

export class ToggleMenu implements Action {
  readonly type = UiActionTypes.toggleMenu;
}

export class DisableMenu implements Action {
  readonly type = UiActionTypes.disableMenu;
}

export type UiActions = ToggleMenu | DisableMenu;

