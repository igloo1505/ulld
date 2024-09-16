import { PlotMarker } from "plotly.js";

export type PlotMarkerHack = Omit<PlotMarker, "gradient"> & {
        gradient?: Omit<PlotMarker["gradient"], "typesrc" | "colorsrc"> & {
            typesrc?: any;
            colorsrc?: any;
        };
    }
