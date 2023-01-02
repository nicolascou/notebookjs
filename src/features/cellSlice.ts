import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../types/cell';
import { UpdateCellPayload, MoveCellPayload, InsertCellPayload } from '../types/action-payloads';

export interface CellSetState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell
  }
}

const initialState: CellSetState = {
  loading: false,
  error: null,
  order: [],
  data: {}
}

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    updateCell: (state, action: PayloadAction<UpdateCellPayload>) => {
      const { id, content } = action.payload;
      
      state.data[id].content = content;
    },
    deleteCell: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
      state.order = state.order.filter((id: string) => id !== action.payload)
    },
    moveCell: (state, action: PayloadAction<MoveCellPayload>) => {
      const { id, direction } = action.payload;
      const index = state.order.findIndex((s: string) => s === id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      
      if (targetIndex < 0 || targetIndex >= state.order.length) {
        return;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = id;
    },
    insertCell: (state, action: PayloadAction<InsertCellPayload>) => {
      const { id, type, content } = action.payload;
      
      const cell: Cell = {
        id: randomId(),
        type,
        content,
      }

      state.data[cell.id] = cell;

      const index = state.order.findIndex((s: string) => s === id)
      if (index < 0) {
        state.order.push(cell.id);
      } else {
        state.order.splice(index, 0, cell.id)
      }
    },
  }
})

const randomId = () => {
  return Math.random().toString(36).substring(2, 6);
}

export const { updateCell, moveCell, insertCell, deleteCell } = cellSlice.actions
export default cellSlice.reducer