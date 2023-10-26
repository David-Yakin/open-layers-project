import { Box } from "@mui/material";
import { FC, useState, useEffect, useRef, memo } from "react";
import MapModel from "../models/MapModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addMap } from "../mapSlice";
import DisplayMode from "./DisplayModes";
import { DisplayModeType, LayerType } from "../types/mapTypes";
import { tileLayer } from "../helpers/layers";
import { addAttack, onZoomOut } from "../helpers/actions";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import Fab from "@mui/material/Fab";

type MapProps = {
  coordinates: number[];
  onChangeCoordinates: (coords: number[]) => void;
};

const OpenLayersMap: FC<MapProps> = ({ coordinates, onChangeCoordinates }) => {
  const [layer, setLayer] = useState<DisplayModeType>("standard");
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
      mapInst.on("dblclick", (e) => addAttack(mapInst, e.coordinate));
    }
  }, [mapInst]);

  // useEffect(() => {
  //   if (mapInst) {
  //     mapInst.setLayers([layer]);
  //   }
  // }, [mapInst, layer]);

  // const handleChangeLayer = (layer: LayerType) => console.log(layer);
  // const handleChangeLayer = (layer: LayerType) => setLayer(layer);

  return (
    <Box
      sx={{ width: "500px", height: "350px", position: "relative" }}
      ref={mapEl}
    >
      {mapInst && (
        <>
          <DisplayMode />
          {/* <DisplayMode onClick={handleChangeLayer} /> */}
          <Fab
            color="primary"
            onClick={() => onZoomOut(mapInst, coordinates)}
            sx={{ position: "absolute", bottom: 15, left: 15, zIndex: 1000 }}
          >
            <ZoomOutOutlinedIcon />
          </Fab>
        </>
      )}
    </Box>
  );
};

export default memo(OpenLayersMap);
