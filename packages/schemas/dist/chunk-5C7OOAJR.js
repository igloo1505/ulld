import {
  RelatedValuesCountOutputTypeSelectSchema
} from "./chunk-CLPNSNZU.js";

// src/database/outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema.ts
import { z } from "zod";
var RelatedValuesCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => RelatedValuesCountOutputTypeSelectSchema).nullish()
}).strict();
var RelatedValuesCountOutputTypeArgsSchema_default = RelatedValuesCountOutputTypeSelectSchema;

export {
  RelatedValuesCountOutputTypeArgsSchema,
  RelatedValuesCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-5C7OOAJR.js.map