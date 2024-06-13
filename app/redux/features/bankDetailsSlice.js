import { createSlice } from "@reduxjs/toolkit";

export const bankDetailsSlice = createSlice({
  name: "bankDetails",
  initialState: [],
  reducers: {
    addBankDetail: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBankDetail } = bankDetailsSlice.actions;

export const selectBankDetails = (state) => state.bankDetails;

export default bankDetailsSlice.reducer;
