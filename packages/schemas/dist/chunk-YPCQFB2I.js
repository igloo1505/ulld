import {
  SubjectUncheckedUpdateManyInputSchema
} from "./chunk-R4GJIFTC.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";
import {
  SubjectWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/SubjectUpdateManyArgsSchema.ts
import { z } from "zod";
var SubjectUpdateManyArgsSchema = z.object({
  data: z.union([SubjectUpdateManyMutationInputSchema, SubjectUncheckedUpdateManyInputSchema]),
  where: SubjectWhereInputSchema.optional()
}).strict();
var SubjectUpdateManyArgsSchema_default = SubjectUpdateManyArgsSchema;

export {
  SubjectUpdateManyArgsSchema,
  SubjectUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-YPCQFB2I.js.map