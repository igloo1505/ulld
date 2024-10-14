import {
  BibEntryUpdateManyWithWhereWithoutBibInputSchema
} from "./chunk-RF2AXYCW.js";
import {
  BibEntryUpdateWithWhereUniqueWithoutBibInputSchema
} from "./chunk-HOP5FBUY.js";
import {
  BibEntryUpsertWithWhereUniqueWithoutBibInputSchema
} from "./chunk-AI5JXBZQ.js";
import {
  BibEntryCreateManyBibInputEnvelopeSchema
} from "./chunk-JRMHY265.js";
import {
  BibEntryCreateOrConnectWithoutBibInputSchema
} from "./chunk-ZJBOJWLM.js";
import {
  BibEntryCreateWithoutBibInputSchema
} from "./chunk-USZFHDYB.js";
import {
  BibEntryUncheckedCreateWithoutBibInputSchema
} from "./chunk-R7N5OQON.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

// src/database/inputTypeSchemas/BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema.ts
import { z } from "zod";
var BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema = z.object({
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
var BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema_default = BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema;

export {
  BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema,
  BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema_default
};
//# sourceMappingURL=chunk-WB7WENFG.js.map