import {
  IpynbUncheckedUpdateManyWithoutSequentialListInputSchema
} from "./chunk-Y5GLAAIV.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-J6JKASW4.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";

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
//# sourceMappingURL=chunk-ZFTJSOGD.js.map