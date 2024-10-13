import {
  PracticeExamUncheckedUpdateManyInputSchema
} from "./chunk-TTQMS4GT.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-IO6UUH36.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/PracticeExamUpdateManyArgsSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyArgsSchema = z.object({
  data: z.union([PracticeExamUpdateManyMutationInputSchema, PracticeExamUncheckedUpdateManyInputSchema]),
  where: PracticeExamWhereInputSchema.optional()
}).strict();
var PracticeExamUpdateManyArgsSchema_default = PracticeExamUpdateManyArgsSchema;

export {
  PracticeExamUpdateManyArgsSchema,
  PracticeExamUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ENGH6POQ.js.map