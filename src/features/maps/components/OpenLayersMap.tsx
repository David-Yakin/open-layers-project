import { Box } from "@mui/material";
import { FC, useEffect, useRef, memo } from "react";
import MapModel from "../models/MapModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addMap, zoomOut } from "../mapSlice";
import DisplayMode from "./DisplayModes";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import Fab from "@mui/material/Fab";

type MapProps = {
  height?: string;
  width?: string;
};

const OpenLayersMap: FC<MapProps> = ({ height = "80vh", width = "100%" }) => {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapInst = useAppSelector((state) => state.map.map);
  const coordinates = useAppSelector((state) => state.map.coordinates);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mapEl.current && !mapInst) {
      const map = MapModel(mapEl.current);
      dispatch(addMap(map));
    }
  }, []);

  return (
    <Box
      width={width}
      height={height}
      top={0}
      left={0}
      ref={mapEl}
      position="relative"
    >
      {mapInst && (
        <>
          <DisplayMode />
          <Fab
            color="primary"
            onClick={() => dispatch(zoomOut(coordinates))}
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
