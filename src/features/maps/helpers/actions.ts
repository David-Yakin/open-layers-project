import { pointsLayer } from "../helpers/layers";
import { View } from "ol";
import Map from "ol/Map";

export const addAttack = (map: Map, coordinates: number[]) => {
  map.setView(
    new View({
      center: coordinates,
      zoom: 17,
    })
  );
  map.addLayer(pointsLayer(coordinates));
};

export const onZoomOut = (map: Map, coordinates: number[]) => {
  if (!map) return null;
  const zoom = map.getView().getZoom();
  if (zoom === 6) return null;

  map.setView(
    new View({
      center: coordinates,
      zoom: 6,
    })
  );
};
