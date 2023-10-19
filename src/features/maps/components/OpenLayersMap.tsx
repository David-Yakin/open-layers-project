import { Box, Typography } from "@mui/material";
import { FC, useState, useEffect, useRef, memo } from "react";
// import Map from "ol/Map";
import MapModel from "../models/MapModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addMap } from "../mapSlice";

type MapProps = {
  coordinates: number[];
  onChangeCoordinates: (coords: number[]) => void;
};

const OpenLayersMap: FC<MapProps> = ({ coordinates, onChangeCoordinates }) => {
  // const [mapInst, setMap] = useState<null | Map>(null);
  // const [marks, setMarks] = useState(null);
  const mapEl = useRef<HTMLDivElement>(null);
  const mapInst = useAppSelector((state) => state.map.map);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mapEl.current && !mapInst) {
      const map = MapModel(mapEl.current);
      dispatch(addMap(map));
    }
  }, []);

  // useEffect(() => {
  //   if (mapEl.current && !mapInst) {
  //     const map = MapModel(mapEl.current);
  //     setMap(map);
  //   }
  // }, []);

  useEffect(() => {
    if (mapInst) {
      mapInst.on("click", (e) => {
        onChangeCoordinates(e.coordinate);
      });
    }
  }, [mapInst]);

  // useEffect(() => {}, [mapInst]);

  return (
    <>
      <Box sx={{ width: "250px", height: "250px" }} ref={mapEl}></Box>
      {coordinates && (
        <Typography>
          coordinates: x: {coordinates[0]} y: {coordinates[1]}
        </Typography>
      )}
    </>
  );
};

export default memo(OpenLayersMap);
