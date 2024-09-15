import { z } from "zod";
import { plotlyDataAxisRange } from "./utils";
import { NumericList } from "@ulld/math/list";
import { plotFunction } from "../../../../../lib/schemas/functions/main";
import { plotlyPlotFunction } from "./plotFunction";


export const plotly2dDataPropsSchema = z
    .object({
        x: plotlyDataAxisRange,
        f: z
            .union([plotlyPlotFunction, plotlyPlotFunction.array()])
            .transform((x) => (Array.isArray(x) ? x : [x])),
    })
    .transform((d) => {
        return {
            ...d,
            numerical: {
                x: NumericList.fromLinSpace(d.x.min, d.x.max, d.x.n).value,
            },
        };
    });
