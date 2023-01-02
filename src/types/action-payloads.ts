import { CellTypes } from './cell';

export interface MoveCellPayload {
  id: string;
  direction: 'up' | 'down';
}

export interface InsertCellPayload {
  id: string | null;
  type: CellTypes;
  content: string;
}

export interface UpdateCellPayload {
  id: string;
  content: string;
}

export interface BundleStartPayload {
  cellId: string;
}

export interface BundleCompletePayload {
  cellId: string;
  bundle: {
    code: string;
    err: string;
  };
}