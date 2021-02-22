import { Action } from '@ngrx/store';

export enum CatalogActionTypes {
  updateParams = '[Catalog] Update params',
  deleteParams = '[Catalog] Delete params',
  updateDefaultParams = '[Catalog] Update default params'
}

export class UpdateParamsAction implements Action {
  readonly type = CatalogActionTypes.updateParams;
  constructor(public payload: any) {
  }
}

export class DeleteParamsAction implements Action {
  readonly type = CatalogActionTypes.deleteParams;
  constructor(public payload: any) {
  }
}

export class UpdateDefaultParamsAction implements Action {
  readonly type = CatalogActionTypes.updateDefaultParams;
  constructor(public payload: any) {
  }
}

export type CatalogActions =
    UpdateParamsAction
  | DeleteParamsAction
  | UpdateDefaultParamsAction;
