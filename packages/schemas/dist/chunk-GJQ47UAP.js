import {
  QAPairCountOutputTypeSelectSchema
} from "./chunk-5TU4WJBP.js";

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
//# sourceMappingURL=chunk-GJQ47UAP.js.map