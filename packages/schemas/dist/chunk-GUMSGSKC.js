import {
  CitationsGroupCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-4WHN63N2.js";
import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-FP3F2CVP.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MSTTSJCA.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";

// src/database/inputTypeSchemas/CitationsGroupCreateNestedManyWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupCreateNestedManyWithoutEntriesInputSchema = z.object({
  create: z.union([z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional()
}).strict();
var CitationsGroupCreateNestedManyWithoutEntriesInputSchema_default = CitationsGroupCreateNestedManyWithoutEntriesInputSchema;

export {
  CitationsGroupCreateNestedManyWithoutEntriesInputSchema,
  CitationsGroupCreateNestedManyWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-GUMSGSKC.js.map