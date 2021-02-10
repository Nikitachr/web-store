import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { UiActions, UiActionTypes } from 'src/app/actions/ui.actions';

export interface UiState {
  menu: boolean;
  filter: boolean;
  loading: boolean;
}

const initialUiState: UiState = {
  menu: false,
  filter: false,
  loading: false
};

export interface CatalogState {
  defaultParams: any;
  params: any;
}

const initialCatalogState: CatalogState = {
  defaultParams: null,
  params: null
};

export interface AppState {
  ui: UiState;
  catalog: CatalogState;
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
    case UiActionTypes.toggleFilter:
      return {
        ...state,
        filter: !state.filter
      };
    case UiActionTypes.disableFilter:
      return {
        ...state,
        filter: false
      };
    case UiActionTypes.startLoading:
      return {
        ...state,
        loading: true
      };
    case UiActionTypes.endLoading:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export function catalogReducer(state: CatalogState = initialCatalogState, action: UiActions): CatalogState {
  switch (action.type) {
    case UiActionTypes.updateDefaultParams:
      return {
        ...state, defaultParams: action.payload
      };
    case UiActionTypes.updateParams:
      return {
        ...state, params: action.payload
      };
    case UiActionTypes.deleteParams:
      return {
        ...state, params: {...state.params, ...action.payload }
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  catalog: catalogReducer
};

export const selectMenu = (state: AppState) => state.ui.menu;
export const selectFilter = (state: AppState) => state.ui.filter;
export const selectLoading = (state: AppState) => state.ui.loading;
export const selectDefaultParams = (state: AppState) => state.catalog.defaultParams;
export const selectParams = (state: AppState) => state.catalog.params;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
