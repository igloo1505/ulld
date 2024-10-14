import {
  ReadingListUncheckedUpdateManyInputSchema
} from "./chunk-RIHFHOWU.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-IO3PULDH.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ReadingListUpdateManyArgsSchema.ts
import { z } from "zod";
var ReadingListUpdateManyArgsSchema = z.object({
  data: z.union([ReadingListUpdateManyMutationInputSchema, ReadingListUncheckedUpdateManyInputSchema]),
  where: ReadingListWhereInputSchema.optional()
}).strict();
var ReadingListUpdateManyArgsSchema_default = ReadingListUpdateManyArgsSchema;

export {
  ReadingListUpdateManyArgsSchema,
  ReadingListUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-5NMVY2VP.js.map