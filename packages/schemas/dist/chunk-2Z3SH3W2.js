import {
  BibEntryFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  ReadingListCountOutputTypeArgsSchema
} from "./chunk-AKWFQI63.js";

// src/database/inputTypeSchemas/ReadingListSelectSchema.ts
import { z } from "zod";
var ReadingListSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  bibEntries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReadingListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ReadingListSelectSchema_default = ReadingListSelectSchema;

export {
  ReadingListSelectSchema,
  ReadingListSelectSchema_default
};
//# sourceMappingURL=chunk-2Z3SH3W2.js.map