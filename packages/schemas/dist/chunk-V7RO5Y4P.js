import {
  IpynbUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-RFKLQ2VU.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-VGIHZ2LG.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutSubjectsInputSchema,
  IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-V7RO5Y4P.js.map