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
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryCreateNestedManyWithoutCitationGroupsInputSchema.ts
import { z } from "zod";
var BibEntryCreateNestedManyWithoutCitationGroupsInputSchema = z.object({
  create: z.union([z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema;

export {
  BibEntryCreateNestedManyWithoutCitationGroupsInputSchema,
  BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default
};
//# sourceMappingURL=chunk-CTEB2ZEQ.js.map