import { Geometry } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";

export type LayerType =
  | VectorLayer<VectorSource<Geometry>>
  | TileLayer<OSM>
  | TileLayer<XYZ>;

export type DisplayModeType = "standard" | "google" | "terrain" | "B&W";
