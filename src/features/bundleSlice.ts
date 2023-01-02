import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BundleStartPayload, BundleCompletePayload } from '../types/action-payloads';

interface BundleState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  } | undefined
};

const initialState: BundleState = {};

export const bundleSlice = createSlice({
  name: 'bundle',
  initialState,
  reducers: {
    bundleStart: (state, action: PayloadAction<BundleStartPayload>) => {
      state[action.payload.cellId] = {
        loading: true,
        code: '',
        err: ''
      }
    },
    bundleComplete: (state, action: PayloadAction<BundleCompletePayload>) => {
      const { cellId, bundle } = action.payload;
      state[cellId] = {
        loading: false,
        code: bundle.code,
        err: bundle.err
      }
    },
  }
});

export const { bundleStart, bundleComplete } = bundleSlice.actions;
export default bundleSlice.reducer;