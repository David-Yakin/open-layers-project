import { Box } from "@mui/material";
import { FC, useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import MapModel from "../models/MapModel";

type MapProps = {};

const OpenLayersMap: FC<MapProps> = ({}) => {
  const [mapInst, setMap] = useState<null | Map>(null);
  const [coordinates, setCoordinates] = useState([0, 0]);

  const mapEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapEl.current && !mapInst) {
      const map = MapModel(mapEl.current);
      setMap(map);
    }
  }, []);

  useEffect(() => {
    if (mapInst) {
      mapInst.on("click", () => console.log(coordinates));
    }
  }, [coordinates, mapInst]);

  return <Box sx={{ width: "250px", height: "250px" }} ref={mapEl}></Box>;
};

export default OpenLayersMap;
