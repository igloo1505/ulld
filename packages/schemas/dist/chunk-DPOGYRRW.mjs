import {
  frontMatterTextStyleSchema
} from "./chunk-6NLUIKDK.mjs";

// src/mdx/frontMatter/tableStyles.ts
import { z } from "zod";
var zodFrontMatterTableStylesObject = z.object({
  fullWidth: z.boolean().nullish().default(false),
  text: frontMatterTextStyleSchema.nullish(),
  math: frontMatterTextStyleSchema.nullish(),
  tableCenter: z.coerce.boolean().nullish().default(false),
  textCenter: z.coerce.boolean().nullish().default(false),
  headingCenter: z.coerce.boolean().nullish().default(false),
  float: z.enum(["right", "left"]).nullish(),
  noMax: z.coerce.boolean().nullish().default(false),
  expand: z.coerce.boolean().nullish().default(false)
});

export {
  zodFrontMatterTableStylesObject
};
//# sourceMappingURL=chunk-DPOGYRRW.mjs.map