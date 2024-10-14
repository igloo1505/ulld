import {
  BibUpsertWithoutEntriesInputSchema
} from "./chunk-5UBLFJ2D.js";
import {
  BibUpdateToOneWithWhereWithoutEntriesInputSchema
} from "./chunk-B5UNPQUI.js";
import {
  BibUncheckedUpdateWithoutEntriesInputSchema
} from "./chunk-L4LJ3BMX.js";
import {
  BibUpdateWithoutEntriesInputSchema
} from "./chunk-E7XCHBZ5.js";
import {
  BibCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-RRTQRPSC.js";
import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-IFYUEVP7.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MNNJTQLC.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-ZFQO6FHY.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-36BL7JFL.js.map