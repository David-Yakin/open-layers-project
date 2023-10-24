import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Map from "ol/Map";

interface InitialState {
  map: Map | null;
}

const initialState: InitialState = {
  map: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    addMap: (state, action: PayloadAction<Map>) => {
      state.map = action.payload;
    },
    addMapAction: (state, action: PayloadAction<Map>) => {
      state.map = action.payload;
    },
  },
});

export const { addMap, addMapAction } = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
