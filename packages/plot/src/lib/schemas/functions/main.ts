import { ExtendedMath } from "@ulld/math/extendedMath";
import { z } from "zod";

export const xyPlotFunctionArgs = z.instanceof(ExtendedMath);

export const plotFunction = z.function().args(z.number(), xyPlotFunctionArgs).returns(z.number())

