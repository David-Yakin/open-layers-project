import { View } from "ol";
import Map from "ol/Map";
import { fromLonLat } from "ol//proj";
import {
  tileLayer,
  googleMapsLayer,
  humanitarianLayer,
  blackAndWight,
} from "../helpers/layers";
import { addAttack } from "../helpers/actions";

type RefEl = string | HTMLElement | undefined;

const MapModel = (refEl: RefEl) => {
  const map = new Map({
    target: refEl,
    layers: [tileLayer, googleMapsLayer, humanitarianLayer, blackAndWight],
    view: new View({
      center: fromLonLat([35, 31.5]),
      zoom: 6,
    }),
    controls: [],
  });
  map.on("dblclick", (e) => addAttack(map, e.coordinate));
  return map;
};

export default MapModel;
