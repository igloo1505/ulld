import {
  IpynbUncheckedUpdateManyWithoutReadingListInputSchema
} from "./chunk-LWH6FFFO.js";
import {
  IpynbScalarWhereInputSchema
} from "./chunk-J6JKASW4.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutReadingListInputSchema.ts
import { z } from "zod";
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default = IpynbUpdateManyWithWhereWithoutReadingListInputSchema;

export {
  IpynbUpdateManyWithWhereWithoutReadingListInputSchema,
  IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default
};
//# sourceMappingURL=chunk-LGIMBGWY.js.map