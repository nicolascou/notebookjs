import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { AnyAction, bindActionCreators, createAction, Dispatch } from "@reduxjs/toolkit";
import { updateCell, insertCell, deleteCell, moveCell } from "../features/cellSlice";
import bundle from "../bundler";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ updateCell, deleteCell, moveCell, insertCell, createBundle }, dispatch);
}

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: 'bundle/bundleStart',
      payload: {
        cellId
      }
    })

    const result = await bundle(input);

    dispatch({
      type: 'bundle/bundleComplete',
      payload: {
        cellId,
        bundle: {
          code: result.code,
          err: result.err
        }
      }
    })
  }
};


