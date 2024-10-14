import {
  BibEntryCreateWithoutCitationGroupsInputSchema
} from "./chunk-A5WKBCUR.js";
import {
  BibEntryUncheckedCreateWithoutCitationGroupsInputSchema
} from "./chunk-YM54NVV3.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

// src/database/inputTypeSchemas/BibEntryCreateOrConnectWithoutCitationGroupsInputSchema.ts
import { z } from "zod";
var BibEntryCreateOrConnectWithoutCitationGroupsInputSchema = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema;

export {
  BibEntryCreateOrConnectWithoutCitationGroupsInputSchema,
  BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default
};
//# sourceMappingURL=chunk-UGQLGMZP.js.map