import {
  QAPairUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-KBG2BUQL.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-MDZ4SLMX.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-XGJ4L2DJ.js";

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var QAPairUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([z.lazy(() => QAPairUpdateManyMutationInputSchema), z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default = QAPairUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  QAPairUpdateManyWithWhereWithoutTopicsInputSchema,
  QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-XVFIRMXH.js.map