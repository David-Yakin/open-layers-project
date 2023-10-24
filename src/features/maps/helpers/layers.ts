import VectorLayer from "ol/layer/Vector";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { Feature } from "ol";
import { Point } from "ol/geom";

export const vectorLayer = new VectorLayer({
  background: "#1a2b39",
  source: new VectorSource({
    url: "https://openlayers.org/data/vector/ecoregions.json",
    format: new GeoJSON(),
  }),
  style: {
    "fill-color": ["string", ["get", "COLOR"], "#eee"],
  },
});

export const tileLayer = new TileLayer({
  source: new OSM(),
});

export const googleMapsLayer = new TileLayer({
  source: new XYZ({
    url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
  }),
});

export const pointsLayer = (coordinates: number[]) => {
  return new VectorLayer({
    source: new VectorSource({
      features: [
        new Feature({
          geometry: new Point(coordinates),
        }),
      ],
    }),
  });
};
