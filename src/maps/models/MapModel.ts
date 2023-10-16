import { View } from "ol";
import Map from "ol/Map";
import { defaults as defaultControls } from "ol/control.js";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

type RefEl = string | HTMLElement | undefined;

const MapModel = (refEl: RefEl) =>
  new Map({
    target: refEl,
    layers: [
      new TileLayer({
        source: new XYZ({
          url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 0,
    }),
    controls: defaultControls().extend([]),
  });

export default MapModel;
