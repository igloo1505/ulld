import {
  BibUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-6O2DFCXV.js";
import {
  BibUpdateWithoutEntriesInputSchema
} from "./chunk-LD3EBDDH.js";
import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-G4BDN2HA.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-WCNBQO4V.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/BibUpsertWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibUpsertWithoutEntriesInputSchema = z.object({
  update: z.union([z.lazy(() => BibUpdateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema)]),
  create: z.union([z.lazy(() => BibCreateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema)]),
  where: z.lazy(() => BibWhereInputSchema).optional()
}).strict();
var BibUpsertWithoutEntriesInputSchema_default = BibUpsertWithoutEntriesInputSchema;

export {
  BibUpsertWithoutEntriesInputSchema,
  BibUpsertWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-YCCZUQ4N.js.map