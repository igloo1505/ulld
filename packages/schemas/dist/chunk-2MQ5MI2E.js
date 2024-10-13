import {
  QAPairUncheckedUpdateManyInputSchema
} from "./chunk-TIFHC7NA.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-XGJ4L2DJ.js";
import {
  QAPairWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-2MQ5MI2E.js.map