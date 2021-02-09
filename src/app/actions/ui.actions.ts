import { Action } from '@ngrx/store';

export enum UiActionTypes {
  toggleMenu = '[UI] Toggle menu',
  disableMenu = '[UI] Disable menu',
  toggleFilter = '[Ui] Toggle filter',
  disableFilter = '[Ui] Disable filter',
  startLoading = '[Ui] Start loading',
  endLoading = '[Ui] End loading',
  updateParams = '[Catalog] Update params'
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

export class StartLoadingAction implements Action {
  readonly type = UiActionTypes.startLoading;
}

export class EndLoadingAction implements Action {
  readonly type = UiActionTypes.endLoading;
}

export class UpdateParamsAction implements Action {
  readonly type = UiActionTypes.updateParams;
  constructor(public payload: any) {
  }
}

export type UiActions =
    ToggleMenuAction
  | DisableMenuAction
  | ToggleFilterAction
  | DisableFilterAction
  | StartLoadingAction
  | EndLoadingAction
  | UpdateParamsAction;

