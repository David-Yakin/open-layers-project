import { Box, Typography } from "@mui/material";
import { FC, useState, useEffect, useRef, memo } from "react";
import MapModel from "../models/MapModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addMap } from "../mapSlice";
import DisplayMode from "./displayMode/DisplayModes";
import { LayerType } from "../types/mapTypes";
import { pointsLayer, tileLayer } from "../helpers/layers";

type MapProps = {
  coordinates: number[];
  onChangeCoordinates: (coords: number[]) => void;
};

const OpenLayersMap: FC<MapProps> = ({ coordinates, onChangeCoordinates }) => {
  // const [marks, setMarks] = useState(null);
  const [layer, setLayer] = useState<LayerType>(tileLayer);
  const mapEl = useRef<HTMLDivElement>(null);
  const mapInst = useAppSelector((state) => state.map.map);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mapEl.current && !mapInst) {
      const map = MapModel(mapEl.current);
      dispatch(addMap(map));
    }
  }, []);

  useEffect(() => {
    if (mapInst) {
      mapInst.on("click", (e) => onChangeCoordinates(e.coordinate));
      // mapInst.on("dblclick", (e) =>
      //   mapInst.addLayer(pointsLayer(e.coordinate))
      // );
    }
  }, [mapInst]);

  useEffect(() => {
    if (mapInst) {
      mapInst.setLayers([layer]);
    }
  }, [mapInst, layer]);

  const handleChangeLayer = (layer: LayerType) => setLayer(layer);

  return (
    <>
      <Box
        sx={{ width: "250px", height: "250px", position: "relative" }}
        ref={mapEl}
      >
        <DisplayMode onClick={handleChangeLayer} />
      </Box>
      {coordinates && (
        <Typography>
          coordinates: x: {coordinates[0]} y: {coordinates[1]}
        </Typography>
      )}
    </>
  );
};

export default memo(OpenLayersMap);
