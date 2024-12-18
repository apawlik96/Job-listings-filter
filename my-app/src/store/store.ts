import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters.ts";
import dataReducer from "./dataSlice.ts";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    data: dataReducer,
  },
});

export const selectState = (state: RootState) => state.filters;
export const selectDataState = (state: RootState) => state.data;
export default store;
