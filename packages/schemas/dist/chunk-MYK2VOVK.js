import {
  BibEntryCreateNestedManyWithoutReadingListInputSchema,
  IpynbCreateNestedManyWithoutReadingListInputSchema,
  MdxNoteCreateNestedManyWithoutReadingListInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/ReadingListCreateInputSchema.ts
import { z } from "zod";
var ReadingListCreateInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
var ReadingListCreateInputSchema_default = ReadingListCreateInputSchema;

export {
  ReadingListCreateInputSchema,
  ReadingListCreateInputSchema_default
};
//# sourceMappingURL=chunk-MYK2VOVK.js.map