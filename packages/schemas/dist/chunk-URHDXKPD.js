import {
  BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema
} from "./chunk-TAXHBPZW.js";
import {
  BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema
} from "./chunk-XFQYU25E.js";
import {
  BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema
} from "./chunk-ZAH6TW77.js";
import {
  BibEntryCreateOrConnectWithoutCitationGroupsInputSchema
} from "./chunk-V5PGHXYA.js";
import {
  BibEntryCreateWithoutCitationGroupsInputSchema
} from "./chunk-AUO45TEA.js";
import {
  BibEntryUncheckedCreateWithoutCitationGroupsInputSchema
} from "./chunk-VNNUPIMN.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BibEntryScalarWhereInputSchema), z.lazy(() => BibEntryScalarWhereInputSchema).array()]).optional()
}).strict();
var BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema_default = BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema;

export {
  BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema,
  BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema_default
};
//# sourceMappingURL=chunk-URHDXKPD.js.map