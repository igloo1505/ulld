import {
  QAPairCountOutputTypeSelectSchema
} from "./chunk-F6BJQMWD.js";

// src/database/outputTypeSchemas/QAPairCountOutputTypeArgsSchema.ts
import { z } from "zod";
var QAPairCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => QAPairCountOutputTypeSelectSchema).nullish()
}).strict();
var QAPairCountOutputTypeArgsSchema_default = QAPairCountOutputTypeSelectSchema;

export {
  QAPairCountOutputTypeArgsSchema,
  QAPairCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-ZKYK7NO7.js.map