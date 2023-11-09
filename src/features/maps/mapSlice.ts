import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Map from "ol/Map";
import { DisplayModeType } from "./types/mapTypes";
import { View } from "ol";

interface InitialState {
  map: Map | null;
  coordinates: number[];
}

const initialState: InitialState = {
  map: null,
  coordinates: [3845166.753921127, 3702578.524254217],
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
    onChangeCoordinates: (state, action: PayloadAction<number[]>) => {
      state.coordinates = action.payload;
    },
    zoomOut: (state, action: PayloadAction<number[]>) => {
      const map = state.map;
      if (!map) return;

      map.setView(
        new View({
          center: action.payload,
          zoom: 6,
        })
      );
    },

    changeDisplay: (state, action: PayloadAction<DisplayModeType>) => {
      state.map?.getAllLayers().forEach((layer) => {
        layer.setVisible(
          layer.get("title") === action.payload ||
            layer.get("title") === undefined
        );
      });
    },
  },
});

export const {
  addMap,
  addMapAction,
  changeDisplay,
  onChangeCoordinates,
  zoomOut,
} = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
