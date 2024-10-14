import {
  CitationsGroupUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-MLC7N5YS.js";
import {
  CitationsGroupUpdateWithoutEntriesInputSchema
} from "./chunk-XI5GFN6E.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";

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
//# sourceMappingURL=chunk-UYI32W4B.js.map