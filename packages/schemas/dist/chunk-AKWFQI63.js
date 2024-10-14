import {
  ReadingListCountOutputTypeSelectSchema
} from "./chunk-7HJWAZ6V.js";

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
//# sourceMappingURL=chunk-AKWFQI63.js.map