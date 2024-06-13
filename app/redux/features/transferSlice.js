// src/store/transferSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const transferSlice = createSlice({
  name: "transfer",
  initialState: {
    transferType1: null,
    transferType2: null,
    selectedTransferType1: null,
    selectedTransferType2: null,
    amount1: "",
    amount2: "", // Initialize amount2 in your state
  },
  reducers: {
    setTransferType1: (state, action) => {
      state.transferType1 = action.payload;
    },
    setTransferType2: (state, action) => {
      state.transferType2 = action.payload;
    },
    setSelectedTransferType1: (state, action) => {
      state.selectedTransferType1 = action.payload;
    },
    setSelectedTransferType2: (state, action) => {
      state.selectedTransferType2 = action.payload;
    },
    setAmount1: (state, action) => {
      state.amount1 = action.payload;
    },
    setAmount2: (state, action) => {
      state.amount2 = action.payload; // Reducer for amount2
    },
  },
});

export const {
  setTransferType1,
  setTransferType2,
  setSelectedTransferType1,
  setSelectedTransferType2,
  setAmount1,
  setAmount2, // Include setAmount2 in exported actions
} = transferSlice.actions;

export default transferSlice.reducer;
