// src/database/outputTypeSchemas/ReadingListCountOutputTypeSelectSchema.ts
import { z } from "zod";
var ReadingListCountOutputTypeSelectSchema = z.object({
  bibEntries: z.boolean().optional(),
  mdxNotes: z.boolean().optional(),
  ipynbNotes: z.boolean().optional()
}).strict();
var ReadingListCountOutputTypeSelectSchema_default = ReadingListCountOutputTypeSelectSchema;

export {
  ReadingListCountOutputTypeSelectSchema,
  ReadingListCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-ISX6JE3E.js.map