import { Action } from '@ngrx/store';

export enum UiActionTypes {
  toggleMenu = '[UI] Toggle menu',
  disableMenu = '[UI] Disable menu',
  toggleFilter = '[Ui] Toggle filter',
  disableFilter = '[Ui] Disable filter'

}

export class ToggleMenuAction implements Action {
  readonly type = UiActionTypes.toggleMenu;
}

export class DisableMenuAction implements Action {
  readonly type = UiActionTypes.disableMenu;
}

export class ToggleFilterAction implements Action {
  readonly type = UiActionTypes.toggleFilter;
}

export class DisableFilterAction implements Action {
  readonly type = UiActionTypes.disableFilter;
}

export type UiActions = ToggleMenuAction | DisableMenuAction | ToggleFilterAction | DisableFilterAction;

