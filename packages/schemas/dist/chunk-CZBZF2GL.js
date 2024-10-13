import {
  IpynbUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-IRFEYGRJ.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-J6JKASW4.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";

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
//# sourceMappingURL=chunk-CZBZF2GL.js.map