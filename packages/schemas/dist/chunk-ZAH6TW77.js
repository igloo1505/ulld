import {
  BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema
} from "./chunk-MGABWCMI.js";
import {
  BibEntryUpdateWithoutCitationGroupsInputSchema
} from "./chunk-L6YBYY4E.js";
import {
  BibEntryCreateWithoutCitationGroupsInputSchema
} from "./chunk-AUO45TEA.js";
import {
  BibEntryUncheckedCreateWithoutCitationGroupsInputSchema
} from "./chunk-VNNUPIMN.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema.ts
import { z } from "zod";
var BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([z.lazy(() => BibEntryUpdateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema)]),
  create: z.union([z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema;

export {
  BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema,
  BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default
};
//# sourceMappingURL=chunk-ZAH6TW77.js.map