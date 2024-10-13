import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-OJZIAFSR.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-KRVE65LP.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";

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
//# sourceMappingURL=chunk-52MLDDPB.js.map