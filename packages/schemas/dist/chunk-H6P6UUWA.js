import {
  BibEntryUpdateManyWithWhereWithoutBibInputSchema
} from "./chunk-XNXJWGWH.js";
import {
  BibEntryUpdateWithWhereUniqueWithoutBibInputSchema
} from "./chunk-NV2URVNK.js";
import {
  BibEntryUpsertWithWhereUniqueWithoutBibInputSchema
} from "./chunk-V3YJVKXJ.js";
import {
  BibEntryCreateManyBibInputEnvelopeSchema
} from "./chunk-VMQFYXR4.js";
import {
  BibEntryCreateOrConnectWithoutBibInputSchema
} from "./chunk-H6Z4WAZ2.js";
import {
  BibEntryCreateWithoutBibInputSchema
} from "./chunk-7CS3SJKD.js";
import {
  BibEntryUncheckedCreateWithoutBibInputSchema
} from "./chunk-OOMJHAVF.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithoutBibNestedInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithoutBibNestedInputSchema = z.object({
  create: z.union([z.lazy(() => BibEntryCreateWithoutBibInputSchema), z.lazy(() => BibEntryCreateWithoutBibInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutBibInputSchema), z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutBibInputSchema).array()]).optional(),
  createMany: z.lazy(() => BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutBibInputSchema), z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutBibInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BibEntryUpdateManyWithWhereWithoutBibInputSchema), z.lazy(() => BibEntryUpdateManyWithWhereWithoutBibInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BibEntryScalarWhereInputSchema), z.lazy(() => BibEntryScalarWhereInputSchema).array()]).optional()
}).strict();
var BibEntryUpdateManyWithoutBibNestedInputSchema_default = BibEntryUpdateManyWithoutBibNestedInputSchema;

export {
  BibEntryUpdateManyWithoutBibNestedInputSchema,
  BibEntryUpdateManyWithoutBibNestedInputSchema_default
};
//# sourceMappingURL=chunk-H6P6UUWA.js.map