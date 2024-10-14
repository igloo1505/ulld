import {
  BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema,
  IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema,
  MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/ReadingListUncheckedCreateInputSchema.ts
import { z } from "zod";
var ReadingListUncheckedCreateInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
var ReadingListUncheckedCreateInputSchema_default = ReadingListUncheckedCreateInputSchema;

export {
  ReadingListUncheckedCreateInputSchema,
  ReadingListUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-6ME4ORWE.js.map