import {
  BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema,
  IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema,
  MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema
} from "./chunk-JOZ37TAM.js";

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
//# sourceMappingURL=chunk-DPEETJCO.js.map