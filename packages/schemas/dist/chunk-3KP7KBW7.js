// src/database/outputTypeSchemas/IpynbCountOutputTypeSelectSchema.ts
import { z } from "zod";
var IpynbCountOutputTypeSelectSchema = z.object({
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  citations: z.boolean().optional(),
  readingList: z.boolean().optional()
}).strict();
var IpynbCountOutputTypeSelectSchema_default = IpynbCountOutputTypeSelectSchema;

export {
  IpynbCountOutputTypeSelectSchema,
  IpynbCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-3KP7KBW7.js.map