import { UiActions, UiActionTypes } from 'src/app/core/actions/ui.actions';


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
