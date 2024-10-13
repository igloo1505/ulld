import {
  BibEntryUncheckedUpdateManyInputSchema
} from "./chunk-V4NJQMMD.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";
import {
  BibEntryWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/BibEntryUpdateManyArgsSchema.ts
import { z } from "zod";
var BibEntryUpdateManyArgsSchema = z.object({
  data: z.union([BibEntryUpdateManyMutationInputSchema, BibEntryUncheckedUpdateManyInputSchema]),
  where: BibEntryWhereInputSchema.optional()
}).strict();
var BibEntryUpdateManyArgsSchema_default = BibEntryUpdateManyArgsSchema;

export {
  BibEntryUpdateManyArgsSchema,
  BibEntryUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-JPH2T2GB.js.map