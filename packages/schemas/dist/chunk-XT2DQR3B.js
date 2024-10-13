import {
  BibUpdateManyMutationInputSchema
} from "./chunk-LDF7HIGN.js";
import {
  BibUncheckedUpdateManyInputSchema
} from "./chunk-CFLJXWLH.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/BibUpdateManyArgsSchema.ts
import { z } from "zod";
var BibUpdateManyArgsSchema = z.object({
  data: z.union([BibUpdateManyMutationInputSchema, BibUncheckedUpdateManyInputSchema]),
  where: BibWhereInputSchema.optional()
}).strict();
var BibUpdateManyArgsSchema_default = BibUpdateManyArgsSchema;

export {
  BibUpdateManyArgsSchema,
  BibUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-XT2DQR3B.js.map