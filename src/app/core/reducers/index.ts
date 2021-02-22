import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { uiReducer, UiState } from 'src/app/core/reducers/ui.reducer';
import { catalogReducer, CatalogState } from 'src/app/core/reducers/catalog.reducer';
import { cartReducer, CartState } from 'src/app/core/reducers/cart.reducer';

export interface AppState {
  ui: UiState;
  catalog: CatalogState;
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  catalog: catalogReducer,
  cart: cartReducer
};

export const selectMenu = (state: AppState) => state.ui.menu;
export const selectFilter = (state: AppState) => state.ui.filter;
export const selectLoading = (state: AppState) => state.ui.loading;
export const selectDefaultParams = (state: AppState) => state.catalog.defaultParams;
export const selectParams = (state: AppState) => state.catalog.params;
export const selectCartProducts = (state: AppState) => state.cart.products;
export const selectCartPrice = (state: AppState) => state.cart.price;


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
