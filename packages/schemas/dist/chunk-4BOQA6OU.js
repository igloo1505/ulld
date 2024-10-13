import {
  ReadingListCountOutputTypeSelectSchema
} from "./chunk-ISX6JE3E.js";

// src/database/outputTypeSchemas/ReadingListCountOutputTypeArgsSchema.ts
import { z } from "zod";
var ReadingListCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => ReadingListCountOutputTypeSelectSchema).nullish()
}).strict();
var ReadingListCountOutputTypeArgsSchema_default = ReadingListCountOutputTypeSelectSchema;

export {
  ReadingListCountOutputTypeArgsSchema,
  ReadingListCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-4BOQA6OU.js.map