import {
  BibUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-6O2DFCXV.js";
import {
  BibUpdateWithoutEntriesInputSchema
} from "./chunk-LD3EBDDH.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/BibUpdateToOneWithWhereWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibUpdateToOneWithWhereWithoutEntriesInputSchema = z.object({
  where: z.lazy(() => BibWhereInputSchema).optional(),
  data: z.union([z.lazy(() => BibUpdateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema)])
}).strict();
var BibUpdateToOneWithWhereWithoutEntriesInputSchema_default = BibUpdateToOneWithWhereWithoutEntriesInputSchema;

export {
  BibUpdateToOneWithWhereWithoutEntriesInputSchema,
  BibUpdateToOneWithWhereWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-KQODXXBY.js.map