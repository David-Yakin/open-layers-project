import { FC, useState } from "react";
import { DisplayModeType } from "../types/mapTypes";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { changeDisplay } from "../mapSlice";
import DisplayIconInterface from "../interfaces/DisplayIconInterface";

type DisplayModeProps = {};

const DisplayMode: FC<DisplayModeProps> = () => {
  const [isOpen, setOpenStatus] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickDisplayIcon = (layer: DisplayModeType) => {
    setOpenStatus(false);
    dispatch(changeDisplay(layer));
  };

  const icons: DisplayIconInterface[] = [
    {
      icon: <LayersOutlinedIcon />,
      name: "terrain",
    },
    {
      icon: <SatelliteAltOutlinedIcon />,
      name: "google",
    },
    {
      icon: <DirectionsCarOutlinedIcon />,
      name: "standard",
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
          const { icon: displayIcon, name } = icon;
          return (
            <SpeedDialAction
              key={i}
              icon={displayIcon}
              tooltipTitle={name}
              onClick={() => handleClickDisplayIcon(name)}
            />
          );
        })}
    </SpeedDial>
  );
};

export default DisplayMode;
