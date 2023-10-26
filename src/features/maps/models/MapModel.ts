import { View } from "ol";
import Map from "ol/Map";
import { fromLonLat } from "ol//proj";
import {
  tileLayer,
  googleMapsLayer,
  humanitarianLayer,
  blackAndWight,
} from "../helpers/layers";

type RefEl = string | HTMLElement | undefined;

const MapModel = (refEl: RefEl) =>
  new Map({
    target: refEl,
    layers: [tileLayer, googleMapsLayer, humanitarianLayer, blackAndWight],
    view: new View({
      center: fromLonLat([35, 31.5]),
      zoom: 6,
    }),
    controls: [],
  });

export default MapModel;
