import {
  CitationsGroupScalarWhereInputSchema
} from "./chunk-2NKVRZKT.js";
import {
  CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema
} from "./chunk-ZMG2OH7Q.js";
import {
  CitationsGroupUpdateManyMutationInputSchema
} from "./chunk-2L2J2NWX.js";

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
//# sourceMappingURL=chunk-ENLSSJTT.js.map