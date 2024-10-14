import {
  QAPairUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-IFHBBLLL.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-7AUS2GNW.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-LK437WDT.js";

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
//# sourceMappingURL=chunk-HAO2DI2U.js.map