import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters.ts";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export const selectState = (state: RootState) => state.filters;
export default store;
