import {
  IpynbUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-SGIQXBZD.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-VGIHZ2LG.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";

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
//# sourceMappingURL=chunk-IQAA7DWG.js.map