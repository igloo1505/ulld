import {
  CitationsGroupScalarWhereInputSchema
} from "./chunk-KJWZWDNU.js";
import {
  CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema
} from "./chunk-OC3UFY3Y.js";
import {
  CitationsGroupUpdateManyMutationInputSchema
} from "./chunk-WEUDJZRI.js";

// src/database/inputTypeSchemas/CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema = z.object({
  where: z.lazy(() => CitationsGroupScalarWhereInputSchema),
  data: z.union([z.lazy(() => CitationsGroupUpdateManyMutationInputSchema), z.lazy(() => CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema;

export {
  CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema,
  CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-E3FV6DLM.js.map