import {
  IpynbUncheckedUpdateManyWithoutCitationsInputSchema
} from "./chunk-4AMPJEV3.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-VGIHZ2LG.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutCitationsInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutCitationsInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default = IpynbUpdateManyWithWhereWithoutCitationsInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutCitationsInputSchema,
  IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default
};
//# sourceMappingURL=chunk-7GOR3KN5.js.map