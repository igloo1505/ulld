import {
  BibEntryUncheckedUpdateManyInputSchema
} from "./chunk-27QHZJM5.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";
import {
  BibEntryWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-XOLR7DGB.js.map