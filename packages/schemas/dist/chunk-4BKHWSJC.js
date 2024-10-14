import {
  QAPairUncheckedUpdateManyInputSchema
} from "./chunk-TU4WKMIW.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-LK437WDT.js";
import {
  QAPairWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/QAPairUpdateManyArgsSchema.ts
import { z } from "zod";
var QAPairUpdateManyArgsSchema = z.object({
  data: z.union([QAPairUpdateManyMutationInputSchema, QAPairUncheckedUpdateManyInputSchema]),
  where: QAPairWhereInputSchema.optional()
}).strict();
var QAPairUpdateManyArgsSchema_default = QAPairUpdateManyArgsSchema;

export {
  QAPairUpdateManyArgsSchema,
  QAPairUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-4BKHWSJC.js.map