import {
  ReadingListSelectSchema
} from "./chunk-BVQSU3RR.js";
import {
  ReadingListIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/ReadingListArgsSchema.ts
import { z } from "zod";
var ReadingListArgsSchema = z.object({
  select: z.lazy(() => ReadingListSelectSchema).optional(),
  include: z.lazy(() => ReadingListIncludeSchema).optional()
}).strict();
var ReadingListArgsSchema_default = ReadingListArgsSchema;

export {
  ReadingListArgsSchema,
  ReadingListArgsSchema_default
};
//# sourceMappingURL=chunk-6T5H6FHD.js.map