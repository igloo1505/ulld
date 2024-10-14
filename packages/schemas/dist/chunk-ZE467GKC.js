import {
  CitationsGroupUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-MLC7N5YS.js";
import {
  CitationsGroupUpdateWithoutEntriesInputSchema
} from "./chunk-XI5GFN6E.js";
import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-FP3F2CVP.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MSTTSJCA.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";

// src/database/inputTypeSchemas/CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  update: z.union([z.lazy(() => CitationsGroupUpdateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)]),
  create: z.union([z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema;

export {
  CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema,
  CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-ZE467GKC.js.map