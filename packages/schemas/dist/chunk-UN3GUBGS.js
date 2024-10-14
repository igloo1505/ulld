import {
  BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema
} from "./chunk-ZZIVTAWP.js";
import {
  BibEntryUpdateWithoutCitationGroupsInputSchema
} from "./chunk-I2GPPUXH.js";
import {
  BibEntryCreateWithoutCitationGroupsInputSchema
} from "./chunk-A5WKBCUR.js";
import {
  BibEntryUncheckedCreateWithoutCitationGroupsInputSchema
} from "./chunk-YM54NVV3.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

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
//# sourceMappingURL=chunk-UN3GUBGS.js.map