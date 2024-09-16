import { NumericList } from "@ulld/math/list";
import { z } from "zod";

export const plotlyDataMinMaxObject = z
    .object({
        n: z.number().default(100),
        dataPoints: z.number().optional(),
        min: z.number().default(0),
        max: z.number().default(10),
    })
    .transform((x) => {
        if (x.dataPoints) {
            x.n = x.dataPoints;
        }
        return x;
    });

export const plotlyDataMinMaxRange = z
    .tuple([z.number(), z.number()])
    .transform((x) =>
        plotlyDataMinMaxObject.parse({
            min: x[0],
            max: x[1],
        }),
    );

export const plotlyDataAxisRange = z
    .union([
        plotlyDataMinMaxRange,
        plotlyDataMinMaxObject,
        z.number().transform((x) =>
            plotlyDataMinMaxObject.parse({
                min: -x,
                max: x,
            }),
        ),
        z
            .function(z.tuple([z.instanceof(NumericList)]))
            .returns(z.union([z.number().array(), z.instanceof(NumericList)])),
    ])
    .transform((t): number[] => {
        if (typeof t === "function") {
            let v = t(new NumericList());
            if (v instanceof NumericList) {
                return v.value;
            } else {
                return v;
            }
        }
        return NumericList.fromLinSpace(t.min, t.max, t.n).value;
    });
