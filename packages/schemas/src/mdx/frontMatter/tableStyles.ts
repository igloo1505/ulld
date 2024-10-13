import { z } from "zod";
import { frontMatterTextStyleSchema } from "./utility.js";

export const zodFrontMatterTableStylesObject = z.object({
    fullWidth: z.boolean().nullish().default(false),
    text: frontMatterTextStyleSchema.nullish(),
    math: frontMatterTextStyleSchema.nullish(),
    tableCenter: z.coerce.boolean().nullish().default(false),
    textCenter: z.coerce.boolean().nullish().default(false),
    headingCenter: z.coerce.boolean().nullish().default(false),
    float: z.enum(["right", "left"]).nullish(),
    noMax: z.coerce.boolean().nullish().default(false),
    expand: z.coerce.boolean().nullish().default(false),
});
