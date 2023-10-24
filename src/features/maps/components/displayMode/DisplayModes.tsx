import { FC, useState } from "react";
import { LayerType } from "../../types/mapTypes";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import { googleMapsLayer, tileLayer, vectorLayer } from "../../helpers/layers";
import { SpeedDial, SpeedDialAction } from "@mui/material";

type DisplayModeProps = {
  onClick: (layer: LayerType) => void;
};

const DisplayMode: FC<DisplayModeProps> = ({ onClick }) => {
  const [isOpen, setOpenStatus] = useState(false);

  const handleClickDisplayIcon = (layer: LayerType) => {
    onClick(layer);
    setOpenStatus(false);
  };

  const icons = [
    { icon: <LayersOutlinedIcon />, name: "geographic", layer: vectorLayer },
    {
      icon: <SatelliteAltOutlinedIcon />,
      name: "Satellite",
      layer: googleMapsLayer,
    },
    {
      icon: <DirectionsCarOutlinedIcon />,
      name: "Open Street Map",
      layer: tileLayer,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<MapTwoToneIcon />}
      onClose={() => setOpenStatus(false)}
      onOpen={() => setOpenStatus(true)}
      open={isOpen}
    >
      {icons &&
        !!icons.length &&
        icons.map((icon, i) => {
          const { icon: displayIcon, name, layer } = icon;
          return (
            <SpeedDialAction
              key={i}
              icon={displayIcon}
              tooltipTitle={name}
              onClick={() => handleClickDisplayIcon(layer)}
            />
          );
        })}
    </SpeedDial>
  );
};

export default DisplayMode;
