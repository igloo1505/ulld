import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/QAPairScalarWhereInputSchema.ts
import { z } from "zod";
var QAPairScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => QAPairScalarWhereInputSchema), z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => QAPairScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => QAPairScalarWhereInputSchema), z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  answer: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  secondaryLabel: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  correctCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional()
}).strict();
var QAPairScalarWhereInputSchema_default = QAPairScalarWhereInputSchema;

export {
  QAPairScalarWhereInputSchema,
  QAPairScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-MDZ4SLMX.js.map