import { Style, Fill, Stroke, RegularShape } from "ol/style";

export const bombPointerStyle = new Style({
  image: new RegularShape({
    fill: new Fill({ color: "red" }),
    stroke: new Stroke({ color: "black", width: 2 }),
    points: 4,
    radius: 20,
    radius2: 4,
    angle: Math.PI / 4,
  }),
});
