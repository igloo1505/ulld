import {
  IpynbUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-UUBFYD3D.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-J6JKASW4.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default = IpynbUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutTopicsInputSchema,
  IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-6XDAZAWR.js.map