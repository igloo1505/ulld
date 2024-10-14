import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-FP3F2CVP.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MSTTSJCA.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";

// src/database/inputTypeSchemas/CitationsGroupCreateOrConnectWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupCreateOrConnectWithoutEntriesInputSchema = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  create: z.union([z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default = CitationsGroupCreateOrConnectWithoutEntriesInputSchema;

export {
  CitationsGroupCreateOrConnectWithoutEntriesInputSchema,
  CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-4WHN63N2.js.map