import {
  ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-ZF2WN3XK.js";
import {
  ReadingListScalarWhereInputSchema
} from "./chunk-V3TMPJ46.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-IO3PULDH.js";

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema,
  ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-KFFQNDUI.js.map