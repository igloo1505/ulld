import {
  IpynbUncheckedUpdateManyInputSchema
} from "./chunk-XIJGLA2S.js";
import {
  IpynbUpdateManyMutationInputSchema
} from "./chunk-7OEJJLWR.js";
import {
  IpynbWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-NQZNJZNZ.js.map