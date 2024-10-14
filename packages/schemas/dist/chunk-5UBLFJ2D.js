import {
  BibUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-L4LJ3BMX.js";
import {
  BibUpdateWithoutEntriesInputSchema
} from "./chunk-E7XCHBZ5.js";
import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-IFYUEVP7.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MNNJTQLC.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-5UBLFJ2D.js.map