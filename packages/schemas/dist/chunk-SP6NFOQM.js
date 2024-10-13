import {
  CitationsGroupCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-52MLDDPB.js";
import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-OJZIAFSR.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-KRVE65LP.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema = z.object({
  create: z.union([z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional()
}).strict();
var CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema_default = CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema;

export {
  CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema,
  CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-SP6NFOQM.js.map