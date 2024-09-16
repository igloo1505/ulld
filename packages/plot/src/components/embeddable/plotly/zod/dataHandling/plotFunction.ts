import { z } from "zod";
import { plotFunction } from "../../../../../lib/schemas/functions/main";
import { PlotParams } from "react-plotly.js";
import { plotlyDataSchema } from "./plotlyData/plotlyData";

export const plotlyPlotFunctionObject = plotlyDataSchema
    .merge(
        z.object({
            f: plotFunction,
            title: z.string().optional(),
            label: z.string().optional(),
        }),
    )
    .transform(
        (
            t,
        ): Omit<PlotParams["data"][number], "x" | "y" | "z"> & {
            f: (typeof t)["f"];
        } => {
            if (t.title) {
                t.label = t.title;
            }
            return t;
        },
    );

export const plotlyPlotFunction = z
    .union([plotFunction, plotlyPlotFunctionObject])
    .transform((x) => {
        if (typeof x === "function") {
            return plotlyPlotFunctionObject.parse({
                f: x,
            });
        }
        return x;
    });
