import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { UiActionTypes } from 'src/app/actions/ui.actions';
import { UiActions } from 'src/app/actions/ui.actions';

export interface UiState {
  menu: boolean;
}

const initialUiState: UiState = {
  menu: false
};

export interface AppState {
  ui: UiState;
}

export function uiReducer(state: UiState = initialUiState, action: UiActions): UiState {
  switch (action.type) {
    case (UiActionTypes.toggleMenu):
      return {
        ...state,
        menu: !state.menu
      };
    case (UiActionTypes.disableMenu):
      return {
        ...state,
        menu: false
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  ui: uiReducer
};

export const selectMenu = (state: AppState) => state.ui.menu;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
