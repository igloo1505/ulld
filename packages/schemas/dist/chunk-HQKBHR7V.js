import {
  ReadingListSelectSchema
} from "./chunk-2Z3SH3W2.js";
import {
  ReadingListIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-HQKBHR7V.js.map