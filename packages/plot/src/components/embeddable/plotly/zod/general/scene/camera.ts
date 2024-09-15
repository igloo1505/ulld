import { z } from "zod";
import { plotlyPointSchema } from "../utils";

export const plotlyCameraSchema = z.object({
   up: plotlyPointSchema.partial(),
   center: plotlyPointSchema.partial(),
   eye: plotlyPointSchema.partial(),
})
