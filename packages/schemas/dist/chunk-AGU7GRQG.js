import {
  CitationsGroupUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-D7PISHZA.js";
import {
  CitationsGroupUpdateWithoutEntriesInputSchema
} from "./chunk-S47EH3VH.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";

// src/database/inputTypeSchemas/CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  data: z.union([z.lazy(() => CitationsGroupUpdateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema;

export {
  CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema,
  CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-AGU7GRQG.js.map