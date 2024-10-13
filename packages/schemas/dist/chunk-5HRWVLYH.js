import {
  IpynbUncheckedUpdateManyInputSchema
} from "./chunk-NSEAQSZY.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7VJBZAES.js";
import {
  IpynbWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/IpynbUpdateManyArgsSchema.ts
import { z } from "zod";
var IpynbUpdateManyArgsSchema = z.object({
  data: z.union([IpynbUpdateManyMutationInputSchema, IpynbUncheckedUpdateManyInputSchema]),
  where: IpynbWhereInputSchema.optional()
}).strict();
var IpynbUpdateManyArgsSchema_default = IpynbUpdateManyArgsSchema;

export {
  IpynbUpdateManyArgsSchema,
  IpynbUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-5HRWVLYH.js.map