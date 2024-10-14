import {
  IpynbUncheckedUpdateManyWithoutSequentialListInputSchema
} from "./chunk-2LP7VMMZ.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-VGIHZ2LG.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutSequentialListInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutSequentialListInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutSequentialListInputSchema,
  IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default
};
//# sourceMappingURL=chunk-7H64TVSI.js.map