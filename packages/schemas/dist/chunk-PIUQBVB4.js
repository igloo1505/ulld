import {
  BibEntryCreateOrConnectWithoutCitationGroupsInputSchema
} from "./chunk-UGQLGMZP.js";
import {
  BibEntryCreateWithoutCitationGroupsInputSchema
} from "./chunk-A5WKBCUR.js";
import {
  BibEntryUncheckedCreateWithoutCitationGroupsInputSchema
} from "./chunk-YM54NVV3.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

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
//# sourceMappingURL=chunk-PIUQBVB4.js.map