import {
  IpynbUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-AY4BQCA3.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-J6JKASW4.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";

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
//# sourceMappingURL=chunk-66R2XDNK.js.map