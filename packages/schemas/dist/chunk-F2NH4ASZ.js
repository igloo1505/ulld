import {
  IpynbUncheckedUpdateManyWithoutReadingListInputSchema
} from "./chunk-T2V7D264.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-VGIHZ2LG.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutReadingListInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default = IpynbUpdateManyWithWhereWithoutReadingListInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutReadingListInputSchema,
  IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default
};
//# sourceMappingURL=chunk-F2NH4ASZ.js.map