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
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryCreateNestedManyWithoutBibInputSchema.ts
import { z } from "zod";
var BibEntryCreateNestedManyWithoutBibInputSchema = z.object({
  create: z.union([z.lazy(() => BibEntryCreateWithoutBibInputSchema), z.lazy(() => BibEntryCreateWithoutBibInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  createMany: z.lazy(() => BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryCreateNestedManyWithoutBibInputSchema_default = BibEntryCreateNestedManyWithoutBibInputSchema;

export {
  BibEntryCreateNestedManyWithoutBibInputSchema,
  BibEntryCreateNestedManyWithoutBibInputSchema_default
};
//# sourceMappingURL=chunk-EEMNVCO4.js.map