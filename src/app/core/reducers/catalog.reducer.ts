import { CatalogActions, CatalogActionTypes } from 'src/app/core/actions/catalog.actions';

export interface CatalogState {
  defaultParams: any;
  params: any;
}

const initialCatalogState: CatalogState = {
  defaultParams: null,
  params: null
};

export function catalogReducer(state: CatalogState = initialCatalogState, action: CatalogActions): CatalogState {
  switch (action.type) {
    case CatalogActionTypes.updateDefaultParams:
      return {
        ...state, defaultParams: action.payload
      };
    case CatalogActionTypes.updateParams:
      return {
        ...state, params: action.payload
      };
    case CatalogActionTypes.deleteParams:
      return {
        ...state, params: {...state.params, ...action.payload }
      };
    default:
      return state;
  }
}
