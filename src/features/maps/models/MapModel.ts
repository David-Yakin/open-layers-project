import { View } from "ol";
import Map from "ol/Map";
import { defaults as defaultControls } from "ol/control.js";
import { fromLonLat } from "ol//proj";
import { tileLayer, vectorLayer } from "../helpers/layers";

type RefEl = string | HTMLElement | undefined;

const MapModel = (refEl: RefEl) =>
  new Map({
    target: refEl,
    layers: [tileLayer],
    // layers: [tileLayer, vectorLayer],
    view: new View({
      center: fromLonLat([35, 31.5]),
      zoom: 6,
    }),
    controls: defaultControls().extend([]),
  });

export default MapModel;
