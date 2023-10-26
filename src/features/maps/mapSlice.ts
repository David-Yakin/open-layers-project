import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Map from "ol/Map";
import { DisplayModeType } from "./types/mapTypes";

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
    turnOnLayer: (state, action: PayloadAction<DisplayModeType>) => {
      state.map?.getAllLayers().forEach((layer) => {
        layer.setVisible(
          layer.get("tileLayer") === action.payload ||
            layer.get("tileLayer") === undefined
        );
      });
    },
  },
});

export const { addMap, addMapAction, turnOnLayer } = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
