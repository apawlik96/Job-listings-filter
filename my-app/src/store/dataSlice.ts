import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/data.json";
import { JobDataInterface } from "../interface/JobDataInterface";

interface DataState {
  jobData: JobDataInterface[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: DataState = {
  jobData: data as JobDataInterface[],
  isLoading: false,
  isError: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    loadData(state) {
      state.isLoading = true;
      state.isError = false;
    },
    loadDataSuccess(state, action: PayloadAction<JobDataInterface[]>) {
      state.isLoading = false;
      state.jobData = action.payload;
    },
    loadDataError(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { loadData, loadDataSuccess, loadDataError } = dataSlice.actions;
export default dataSlice.reducer;
