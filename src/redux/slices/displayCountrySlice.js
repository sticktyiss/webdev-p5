import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry";

export const displayCountrySlice = createSlice({
  name: "display",
  initialState: {
    value: initialCountry,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.value = action.payload;
    },
    deleteDisplayCountry: (state) => {
      state.value = null;
    },
  },
});

export const { setDisplayCountry, deleteDisplayCountry} = displayCountrySlice.actions;

export const selectDisplay = (state) => state.displayedCountry.value;

export default displayCountrySlice.reducer