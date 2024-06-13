// recipientSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipientDetails: {},
};

const recipientSlice = createSlice({
  name: "recipient",
  initialState,
  reducers: {
    setRecipientDetails: (state, action) => {
      state.recipientDetails = action.payload;
    },
  },
});

export const { setRecipientDetails } = recipientSlice.actions;

export default recipientSlice.reducer;
