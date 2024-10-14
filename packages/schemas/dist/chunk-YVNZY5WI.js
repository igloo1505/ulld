import {
  IpynbUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-EOFS34FA.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-VGIHZ2LG.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutTagsInputSchema_default = IpynbUpdateManyWithWhereWithoutTagsInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutTagsInputSchema,
  IpynbUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-YVNZY5WI.js.map