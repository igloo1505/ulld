import {
  IpynbUncheckedUpdateManyWithoutCitationsInputSchema
} from "./chunk-XS7K2Y7J.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-J6JKASW4.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";

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
//# sourceMappingURL=chunk-TCSJLB72.js.map