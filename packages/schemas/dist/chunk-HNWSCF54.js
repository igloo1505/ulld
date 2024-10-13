import {
  CitationsGroupUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-D7PISHZA.js";
import {
  CitationsGroupUpdateWithoutEntriesInputSchema
} from "./chunk-S47EH3VH.js";
import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-OJZIAFSR.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-KRVE65LP.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";

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
//# sourceMappingURL=chunk-HNWSCF54.js.map