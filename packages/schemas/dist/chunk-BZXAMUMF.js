import {
  BibUpsertWithoutEntriesInputSchema
} from "./chunk-YCCZUQ4N.js";
import {
  BibUpdateToOneWithWhereWithoutEntriesInputSchema
} from "./chunk-KQODXXBY.js";
import {
  BibUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-6O2DFCXV.js";
import {
  BibUpdateWithoutEntriesInputSchema
} from "./chunk-LD3EBDDH.js";
import {
  BibCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-LLXSHX5V.js";
import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-G4BDN2HA.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-WCNBQO4V.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-GOTDWA2C.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/BibUpdateOneWithoutEntriesNestedInputSchema.ts
import { z } from "zod";
var BibUpdateOneWithoutEntriesNestedInputSchema = z.object({
  create: z.union([z.lazy(() => BibCreateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  upsert: z.lazy(() => BibUpsertWithoutEntriesInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BibWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BibWhereInputSchema)]).optional(),
  connect: z.lazy(() => BibWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => BibUpdateToOneWithWhereWithoutEntriesInputSchema), z.lazy(() => BibUpdateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema)]).optional()
}).strict();
var BibUpdateOneWithoutEntriesNestedInputSchema_default = BibUpdateOneWithoutEntriesNestedInputSchema;

export {
  BibUpdateOneWithoutEntriesNestedInputSchema,
  BibUpdateOneWithoutEntriesNestedInputSchema_default
};
//# sourceMappingURL=chunk-BZXAMUMF.js.map