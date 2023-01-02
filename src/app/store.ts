import { configureStore } from "@reduxjs/toolkit";
import cellReducer from '../features/cellSlice';
import bundleReducer from '../features/bundleSlice';

export const store = configureStore({
  reducer: {
    cells: cellReducer,
    bundles: bundleReducer,
  },
});

store.dispatch({
  type: 'cell/insertCell',
  payload: {
    id: null,
    type: 'code',
    content: '// Use the html() function to display content in the preview window'
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch