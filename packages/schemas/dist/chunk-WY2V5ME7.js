import {
  ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-CE5A2DDA.js";
import {
  ReadingListScalarWhereInputSchema
} from "./chunk-V3TMPJ46.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-IO3PULDH.js";

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema;

export {
  ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema,
  ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-WY2V5ME7.js.map