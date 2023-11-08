import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { bombPointerStyle } from "./styles";

export const tileLayer: TileLayer<OSM> = new TileLayer({
  source: new OSM(),
  visible: true,
  properties: {
    title: "standard",
  },
});

export const googleMapsLayer = new TileLayer({
  source: new XYZ({
    url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
  }),
  visible: false,
  properties: {
    title: "google",
  },
});

export const blackAndWight = new TileLayer({
  source: new XYZ({
    url: "http://tile.stamen.com/toner/{z}/{x}/{y}.png",
  }),
  visible: false,
  properties: {
    title: "B&W",
  },
});

export const humanitarianLayer = new TileLayer({
  source: new OSM({
    url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  }),
  visible: false,
  properties: {
    title: "terrain",
  },
});

export const pointsLayer = (coordinates: number[]) => {
  const marker = new VectorLayer({
    source: new VectorSource({
      features: [
        new Feature({
          geometry: new Point(coordinates),
        }),
      ],
    }),
  });
  marker.setStyle(bombPointerStyle);
  return marker;
};
