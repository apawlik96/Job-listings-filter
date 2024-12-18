import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobFiltersState {
  roles: string[];
  levels: string[];
  languagesAndTools: string[];
}

const initialState: JobFiltersState = {
  roles: [],
  levels: [],
  languagesAndTools: [],
};

const jobFiltersSlice = createSlice({
  name: "jobFilters",
  initialState,
  reducers: {
    updateSelected(
      state,
      action: PayloadAction<{
        category: keyof JobFiltersState;
        values: string[];
      }>
    ) {
      state[action.payload.category] = action.payload.values;
    },
    clearAllSelected(state) {
      state.roles = [];
      state.levels = [];
      state.languagesAndTools = [];
    },
    removeSelectedItem(
      state,
      action: PayloadAction<{ category: keyof JobFiltersState; value: string }>
    ) {
      state[action.payload.category] = state[action.payload.category].filter(
        (item) => item !== action.payload.value
      );
    },
  },
});

export const { updateSelected, removeSelectedItem, clearAllSelected } =
  jobFiltersSlice.actions;

export default jobFiltersSlice.reducer;
