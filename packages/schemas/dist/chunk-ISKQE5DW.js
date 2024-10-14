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
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

// src/database/inputTypeSchemas/BibEntryUncheckedCreateNestedManyWithoutBibInputSchema.ts
import { z } from "zod";
var BibEntryUncheckedCreateNestedManyWithoutBibInputSchema = z.object({
  create: z.union([z.lazy(() => BibEntryCreateWithoutBibInputSchema), z.lazy(() => BibEntryCreateWithoutBibInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  createMany: z.lazy(() => BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema;

export {
  BibEntryUncheckedCreateNestedManyWithoutBibInputSchema,
  BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default
};
//# sourceMappingURL=chunk-ISKQE5DW.js.map