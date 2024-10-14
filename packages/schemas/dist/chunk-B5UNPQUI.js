import {
  BibUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-L4LJ3BMX.js";
import {
  BibUpdateWithoutEntriesInputSchema
} from "./chunk-E7XCHBZ5.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-B5UNPQUI.js.map